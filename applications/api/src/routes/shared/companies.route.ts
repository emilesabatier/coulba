import { companies, users } from "@coulba/schemas/models"
import { shared } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { pbkdf2Sync, randomBytes } from "crypto"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { sendEmail } from "../../services/email/sendEmail.js"
import { signUpTemplate } from "../../services/email/templates/signUp.js"


export const companiesRoute = new Hono()
    .post(
        '/',
        validator("json", bodyValidator(shared.companies.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            if (body.user.password !== body.user.passwordCheck) throw new HTTPException(400, { message: "Les mots de passe renseignés sont différents" })
            const emailToken = randomBytes(128).toString('hex')

            const createResponse = await db.transaction(async (tx) => {

                const idCompany = generateId()
                const passwordSalt = randomBytes(16).toString('hex')
                const passwordHash = pbkdf2Sync(body.user.password, passwordSalt, 128000, 64, `sha512`).toString(`hex`)

                await tx
                    .insert(users)
                    .values({
                        id: generateId(),
                        idCompany: idCompany,
                        isAdmin: true,
                        forename: body.user.forename,
                        surname: body.user.surname,
                        email: body.user.email,
                        isEmailValidated: false,
                        emailToValidate: body.user.email,
                        emailToken: emailToken,
                        emailTokenExpiresOn: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString(),
                        isActive: true,
                        passwordHash: passwordHash,
                        passwordSalt: passwordSalt
                    })
                    .returning()

                return await tx
                    .insert(companies)
                    .values({
                        id: idCompany,
                        siren: body.siren,
                        name: body.name,
                        address: body.address,
                        email: body.email
                    })
                    .returning()
            })

            await sendEmail({
                to: body.user.email,
                subject: "Valider votre adresse email | Coulba",
                html: signUpTemplate()
            })

            return c.json(createResponse, 200)
        }
    )
