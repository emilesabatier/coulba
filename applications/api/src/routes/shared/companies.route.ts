import { companies, journals, sessions, users } from "@coulba/schemas/models"
import { shared } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { pbkdf2Sync, randomBytes } from "crypto"
import { Hono } from 'hono'
import { setCookie, setSignedCookie } from "hono/cookie"
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { env } from "../../env.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { sendEmail } from "../../services/email/sendEmail.js"
import { validateEmailTemplate } from "../../services/email/templates/validateEmail.js"


export const companiesRoute = new Hono()
    .post(
        '/',
        validator("json", bodyValidator(shared.companies.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            if (body.user.password !== body.user.passwordCheck) throw new HTTPException(400, { message: "Les mots de passe renseignés sont différents" })
            const emailToken = randomBytes(128).toString('hex')

            const [userResponse] = await db.transaction(async (tx) => {

                // Add company
                const idCompany = generateId()
                await tx
                    .insert(companies)
                    .values({
                        id: idCompany,
                        siren: null,
                        name: null,
                        email: null
                    })

                // Add journals
                await tx
                    .insert(journals)
                    .values([
                        {
                            id: generateId(),
                            idCompany: idCompany,
                            acronym: "VT",
                            label: "Ventes"
                        },
                        {
                            id: generateId(),
                            idCompany: idCompany,
                            acronym: "AC",
                            label: "Achats"
                        },
                        {
                            id: generateId(),
                            idCompany: idCompany,
                            acronym: "BQ",
                            label: "Banque"
                        },
                        {
                            id: generateId(),
                            idCompany: idCompany,
                            acronym: "OD",
                            label: "Opérations diverses"
                        }
                    ])


                // Add user
                const passwordSalt = randomBytes(16).toString('hex')
                const passwordHash = pbkdf2Sync(body.user.password, passwordSalt, 128000, 64, `sha512`).toString(`hex`)
                return await tx
                    .insert(users)
                    .values({
                        id: generateId(),
                        idCompany: idCompany,
                        isAdmin: true,
                        alias: body.user.alias,
                        email: body.user.email,
                        isEmailValidated: false,
                        emailToValidate: body.user.email,
                        emailToken: emailToken,
                        emailTokenExpiresOn: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString(),
                        isInvitationValidated: true,
                        isActive: true,
                        passwordHash: passwordHash,
                        passwordSalt: passwordSalt
                    })
                    .returning()

            })

            const urlApp = env()?.APP_BASE_URL
            if (!urlApp) throw new HTTPException(500)

            await sendEmail({
                to: userResponse.email,
                subject: "Valider votre email",
                html: validateEmailTemplate({
                    to: `${userResponse.alias ?? userResponse.email}`,
                    url: `${urlApp}/services/email?id=${userResponse.id}&token=${userResponse.emailToken}`,
                })
            })

            // Set up session cookies
            const currentDate = new Date()
            const sessionLifetime = Number(env()?.SESSION_LIFETIME)
            const cookiesKey = env()?.COOKIES_KEY
            if (!sessionLifetime || !cookiesKey) throw new HTTPException(401, { message: "Connexion impossible" })

            const expirationDate = new Date(currentDate.getTime() + 1000 * sessionLifetime)
            const [createSession] = await db
                .insert(sessions)
                .values({
                    id: generateId(),
                    idUser: userResponse.id,
                    expiresOn: expirationDate.toISOString(),
                    isActive: true
                })
                .returning()

            await setSignedCookie(c, "id_session", createSession.id, cookiesKey, {
                expires: expirationDate,
                httpOnly: true,
                secure: true,
                sameSite: "None",
                domain: env()?.COOKIES_DOMAIN
            })
            setCookie(c, "is_signed_in", "true", {
                expires: expirationDate,
                httpOnly: false,
                secure: true,
                sameSite: "None",
                domain: env()?.COOKIES_DOMAIN
            })

            return c.json({}, 200)
        }
    )
