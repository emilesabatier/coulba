import { attachments } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { bodyValidator } from "../../middlewares/bodyValidator"
import { AuthEnv } from "../../middlewares/checkAuth"
import { paramsValidator } from "../../middlewares/paramsValidator"


export const attachmentsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.attachments.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createAttachment] = await db
                .insert(attachments)
                .values({
                    id: generateId(),
                    idCompany: c.var.company.id,
                    idYear: c.var.currentYear.id,
                    reference: body.reference,
                    label: body.label,
                    storageKey: body.storageKey,
                    type: body.type,
                    size: body.size,
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()

            return c.json(createAttachment, 200)
        }
    )
    .get(
        "/:idAttachment?",
        validator("param", paramsValidator(auth.attachments.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idAttachment) {
                const readAttachments = await db
                    .select()
                    .from(attachments)
                    .where(eq(attachments.idCompany, c.var.user.idCompany))

                return c.json(readAttachments, 200)
            }

            const [readAttachment] = await db
                .select()
                .from(attachments)
                .where(eq(attachments.id, params.idAttachment))

            return c.json(readAttachment, 200)
        }
    )
    .put(
        '/:idAttachment',
        validator("param", paramsValidator(auth.attachments.put.params)),
        validator("json", bodyValidator(auth.attachments.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateAttachment] = await db
                .update(attachments)
                .set({
                    reference: body.reference,
                    label: body.label,
                    storageKey: body.storageKey,
                    type: body.type,
                    size: body.size,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(attachments.id, params.idAttachment))
                .returning()

            return c.json(updateAttachment, 200)
        }
    )
    .delete(
        '/:idAttachment',
        validator("param", paramsValidator(auth.attachments.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteAttachment] = await db
                .delete(attachments)
                .where(eq(attachments.id, params.idAttachment))
                .returning()

            return c.json(deleteAttachment, 200)
        }
    )
