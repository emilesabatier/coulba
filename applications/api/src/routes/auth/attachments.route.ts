import { attachments } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { eq } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
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
                    idCompany: c.var.user.idCompany,
                    idYear: body.idYear,
                    reference: body.reference,
                    label: body.label
                })
                .returning()

            return c.json(createAttachment, 200)
        }
    )
    .get(
        "/:idAttachment",
        validator("param", paramsValidator(auth.attachments.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idAttachment) {
                const readAttachments = await db
                    .select()
                    .from(attachments)
                    .where(eq(attachments.idCompany, c.var.user.idCompany))

                if (readAttachments.length < 1) throw new HTTPException(404, { message: "Pièces non trouvées" })
                return c.json(readAttachments, 200)
            }

            const [readAttachment] = await db
                .select()
                .from(attachments)
                .where(eq(attachments.id, params.idAttachment))

            if (!readAttachment) throw new HTTPException(404, { message: "Pièce non trouvée" })
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
                    idYear: body.idYear,
                    reference: body.reference,
                    label: body.label
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
