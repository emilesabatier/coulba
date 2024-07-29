import { defaultJournals } from "@coulba/schemas/components"
import { journals, organizations, sessions, users, years } from "@coulba/schemas/models"
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
import { emailValidationTemplate } from "../../services/email/templates/emailValidation.js"
import { generateDefaultYearData } from "../auth/years/generateDefaultYearData.js"


export const organizationsRoute = new Hono()
    .post(
        '/',
        validator("json", bodyValidator(shared.organizations.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            if (body.user.password !== body.user.passwordCheck) throw new HTTPException(400, { message: "Les mots de passe renseignés sont différents" })

            // Add organization
            const [createOrganization] = await db
                .insert(organizations)
                .values({
                    id: generateId(),
                    scope: body.scope,
                    siren: null,
                    name: null,
                    email: null
                })
                .returning()

            // Add current Year
            const currentDate = new Date()
            const [createYear] = await db
                .insert(years)
                .values({
                    id: generateId(),
                    idOrganization: createOrganization.id,
                    isSelected: true,
                    label: `Exercice ${currentDate.getFullYear()}`,
                    startingOn: new Date(currentDate.getFullYear(), 0, 1, 0, 0, 0).toISOString(),
                    endingOn: new Date(currentDate.getFullYear(), 11, 31, 23, 59, 59).toISOString(),
                    isClosed: false
                })
                .returning()

            await generateDefaultYearData({
                organization: createOrganization,
                year: createYear,
                isMinimalSystem: body.isMinimalSystem ?? false
            })

            // Add journals
            await db
                .insert(journals)
                .values(
                    defaultJournals.map((journal) => ({
                        id: generateId(),
                        idOrganization: createOrganization.id,
                        code: journal.code,
                        label: journal.label
                    }))
                )

            // Add user
            const passwordSalt = randomBytes(16).toString('hex')
            const passwordHash = pbkdf2Sync(body.user.password, passwordSalt, 128000, 64, `sha512`).toString(`hex`)
            const emailToken = randomBytes(128).toString('hex')
            const [userResponse] = await db
                .insert(users)
                .values({
                    id: generateId(),
                    idOrganization: createOrganization.id,
                    isAdmin: true,
                    alias: null,
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

            const urlApp = env()?.APP_BASE_URL
            if (!urlApp) throw new HTTPException(500)

            await sendEmail({
                to: userResponse.email,
                subject: "Valider votre email",
                html: emailValidationTemplate({
                    url: `${urlApp}/services/email?id=${userResponse.id}&token=${userResponse.emailToken}`,
                })
            })

            // Set up session cookies
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

            return c.json(createSession, 200)
        }
    )
