import { users } from '@coulba/schemas/models'
import { shared } from '@coulba/schemas/routes'
import { eq } from 'drizzle-orm'
import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { validator } from 'hono/validator'
import { db } from '../../clients/db'
import { bodyValidator } from '../../middlewares/bodyValidator'


export const usersRoute = new Hono()
    .post(
        '/reset-password',
        validator("json", bodyValidator(shared.users.patch.resetPassword.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [updateUser] = await db
                .update(users)
                .set({
                    // isActivated: false,
                    lastUpdatedBy: null,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(users.email, body.email))
                .returning()

            if (!updateUser) throw new HTTPException(200, { message: "" })


            // const passwordSalt = randomBytes(16).toString('hex')
            // const passwordHash = pbkdf2Sync(body.user.password, passwordSalt, 128000, 64, `sha512`).toString(`hex`)


            return c.json(updateUser, 200)
        }
    )
