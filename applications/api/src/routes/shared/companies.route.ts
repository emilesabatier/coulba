import { DefaultComputation, DefaultSheet, defaultAccounts, defaultComputations, defaultSheets, defaultStatements } from "@coulba/schemas/components"
import { accountSheets, accounts, companies, computationStatements, computations, journals, sessions, sheets, statements, users, years } from "@coulba/schemas/models"
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
import { signUpTemplate } from "../../services/email/templates/signUp.js"


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
                        siren: body.siren,
                        name: body.name,
                        address: body.address,
                        email: body.email
                    })

                // Add year
                const idCurrentYear = generateId()
                await tx
                    .insert(years)
                    .values({
                        id: idCurrentYear,
                        idCompany: idCompany,
                        isSelected: true,
                        label: `Exercice ${new Date().getFullYear()}`,
                        startingOn: new Date(new Date().getFullYear(), 0, 1, 0, 0).toISOString(),
                        endingOn: new Date(new Date().getFullYear(), 11, 31, 23, 99, 99).toISOString()
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
                            acronym: "HA",
                            label: "Achats"
                        },
                        {
                            id: generateId(),
                            idCompany: idCompany,
                            acronym: "SL",
                            label: "Salaires"
                        },
                        {
                            id: generateId(),
                            idCompany: idCompany,
                            acronym: "BQ",
                            label: "Banque"
                        },
                    ])

                // Add sheets
                let newSheets: (typeof sheets.$inferInsert & { numberParent: number | undefined, accounts: DefaultSheet["accounts"][number][] })[] = defaultSheets.map((_sheet) => ({
                    id: generateId(),
                    idCompany: idCompany,
                    idYear: idCurrentYear,
                    side: _sheet.side,
                    number: _sheet.number,
                    label: _sheet.label,
                    numberParent: _sheet.numberParent,
                    accounts: _sheet.accounts
                }))
                newSheets = newSheets.map((_sheet) => {
                    const parent = newSheets.find((x) => (x.number === _sheet.numberParent) && (x.side === _sheet.side))
                    return ({
                        ..._sheet,
                        idParent: parent?.id
                    })
                })
                await tx
                    .insert(sheets)
                    .values(newSheets)

                // Add statements
                let newStatements: (typeof statements.$inferInsert & { numberParent: number | undefined, accounts: number[] })[] = defaultStatements.map((_statement) => ({
                    id: generateId(),
                    idCompany: idCompany,
                    idYear: idCurrentYear,
                    number: _statement.number,
                    label: _statement.label,
                    numberParent: _statement.numberParent,
                    accounts: _statement.accounts
                }))
                newStatements = newStatements.map((_statement) => {
                    const parent = newStatements.find((x) => x.number === _statement.numberParent)
                    return ({
                        ..._statement,
                        idParent: parent?.id
                    })
                })
                await tx
                    .insert(statements)
                    .values(newStatements)


                // Add computations
                const newComputations: (typeof computations.$inferInsert & { statements: DefaultComputation["statements"][number][] })[] = defaultComputations.map((_computation) => {
                    return ({
                        id: generateId(),
                        idCompany: idCompany,
                        idYear: idCurrentYear,
                        number: _computation.number,
                        label: _computation.label,
                        statements: _computation.statements
                    })
                })
                await tx
                    .insert(computations)
                    .values(newComputations)


                // Add computationStatements
                const newComputationStatements: Array<(typeof computationStatements.$inferInsert)> = []
                newComputations.forEach((_computation) => {
                    _computation.statements.forEach((_statement) => {
                        const statement = newStatements.find((x) => x.number === _statement.number)
                        if (!statement) return
                        newComputationStatements.push({
                            id: generateId(),
                            idComputation: _computation.id,
                            idStatement: statement.id,
                            operation: _statement.operation
                        })
                    })
                })
                await tx
                    .insert(computationStatements)
                    .values(newComputationStatements)

                // Add accounts
                let newAccounts: Array<(typeof accounts.$inferInsert)> = defaultAccounts.map((_account) => {
                    const statement = newStatements.find((_statement) => _statement.accounts.toString().includes(_account.number.toString()))
                    return ({
                        id: generateId(),
                        idCompany: idCompany,
                        idYear: idCurrentYear,
                        idStatement: statement?.id,
                        number: _account.number,
                        system: _account.system,
                        label: _account.label
                    })
                })
                newAccounts = newAccounts.map((_account) => {
                    const parent = newAccounts.find((x) => x.number !== _account.number && _account.number.toString().includes(x.number.toString()) && _account.number.toString().length === x.number.toString().length + 1)
                    return ({
                        ..._account,
                        idParent: parent?.id
                    })
                })
                await tx
                    .insert(accounts)
                    .values(newAccounts)


                // Add accountSheets
                const newAccountSheets: Array<(typeof accountSheets.$inferInsert)> = []
                newSheets.forEach((_sheet) => {
                    _sheet.accounts.forEach((_account) => {
                        const account = newAccounts.find((x) => x.number === _account.number)
                        if (!account) return
                        newAccountSheets.push({
                            id: generateId(),
                            idAccount: account.id,
                            idSheet: _sheet.id,
                            flow: _account.flow,
                            isAllowance: _account.isAllowance
                        })
                    })
                })
                await tx
                    .insert(accountSheets)
                    .values(newAccountSheets)


                // Add user
                const passwordSalt = randomBytes(16).toString('hex')
                const passwordHash = pbkdf2Sync(body.user.password, passwordSalt, 128000, 64, `sha512`).toString(`hex`)
                return await tx
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
                        isInvitationValidated: true,
                        isActive: true,
                        passwordHash: passwordHash,
                        passwordSalt: passwordSalt
                    })
                    .returning()

            })

            await sendEmail({
                to: body.user.email,
                subject: "Valider votre adresse email",
                html: signUpTemplate()
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
