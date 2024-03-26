import { attachments } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { bodyValidator } from "../../middlewares/bodyValidator"
import { AuthEnv } from "../../middlewares/checkAuth"


export const attachmentsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.attachments.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createAttachment] = await db
                .insert(attachments)
                .values({
                    // id: generateId(),
                    // idCompany: c.var.company.id,
                    // idYear: c.var.currentYear.id,
                    // reference: body.reference,
                    // label: body.label,
                    // storageKey: body.storageKey,
                    // type: body.type,
                    // size: body.size,
                    // lastUpdatedBy: c.var.user.id,
                    // createdBy: c.var.user.id
                })
                .returning()

            return c.json(createAttachment, 200)
        }
    )
