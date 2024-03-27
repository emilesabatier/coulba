import { users } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { pbkdf2Sync, randomBytes } from "crypto"
import { eq } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from "hono/validator"
import { db } from "../../clients/db"
import { bodyValidator } from "../../middlewares/bodyValidator"
import { AuthEnv } from "../../middlewares/checkAuth"


export const profileRoute = new Hono<AuthEnv>()
    .get(
        "/",
        async (c) => {
            const [readUser] = await db
                .select()
                .from(users)
                .where(eq(users.id, c.var.user.id))

            return c.json(readUser, 200)
        }
    )
    .put(
        '/',
        validator("json", bodyValidator(auth.profile.put.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [updateUser] = await db
                .update(users)
                .set({
                    forename: body.forename,
                    surname: body.surname,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(users.id, c.var.user.id))
                .returning()

            return c.json(updateUser, 200)
        }
    )
    .patch(
        '/update-email',
        validator("json", bodyValidator(auth.profile.patch.updateEmail.body)),
        async (c) => {
            const body = c.req.valid('json')

            const givenPasswordHash = pbkdf2Sync(body.currentPassword, c.var.user.passwordSalt, 128000, 64, `sha512`).toString(`hex`)
            if (givenPasswordHash !== c.var.user.passwordSalt) throw new HTTPException(400, { message: "Le mot de passe renseigné est incorrect" })

            const [updateUser] = await db
                .update(users)
                .set({
                    emailTemporary: body.emailTemporary,
                    emailToken: randomBytes(128).toString('hex'),
                    emailTokenExpiresOn: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString(),
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id
                })
                .where(eq(users.id, c.var.user.id))
                .returning()

            return c.json(updateUser, 200)
        }
    )
    .patch(
        '/update-password',
        validator("json", bodyValidator(auth.profile.patch.updatePassword.body)),
        async (c) => {
            const body = c.req.valid('json')

            const givenPasswordHash = pbkdf2Sync(body.currentPassword, c.var.user.passwordSalt, 128000, 64, `sha512`).toString(`hex`)
            if (givenPasswordHash !== c.var.user.passwordSalt) throw new HTTPException(400, { message: "Le mot de passe actuel renseigné est incorrect" })

            const newPasswordHash = pbkdf2Sync(body.newPassword, c.var.user.passwordSalt, 128000, 64, `sha512`).toString(`hex`)

            const [updateUser] = await db
                .update(users)
                .set({
                    passwordHash: newPasswordHash,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id
                })
                .where(eq(users.id, c.var.user.id))
                .returning()

            return c.json(updateUser, 200)
        }
    )
