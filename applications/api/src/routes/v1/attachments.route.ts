import { PutObjectCommand } from "@aws-sdk/client-s3"
import { attachments } from "@coulba/schemas/models"
import { v1 } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { Hono } from 'hono'
import * as v from "valibot"
import { db } from "../../clients/db.js"
import { s3Client } from "../../clients/storage.js"
import { env } from "../../env.js"
import { V1Env } from "../../middlewares/checkApiKey.js"


export const attachmentsRoute = new Hono<V1Env>()
    .post(
        '/',
        async (c) => {
            const rawBody = await c.req.parseBody()
            const parsedBody = v.safeParse(v1.attachments.post.body, rawBody)
            if (!parsedBody.success) {
                if (env()?.ENV !== "production") console.log(parsedBody.issues)
                return c.text('Données de la requête invalides.', 401)
            }
            const body = parsedBody.output

            const size = body.file.size
            const type = body.file.type

            const key = `companies/${c.var.company.id}/${c.var.currentYear.id}/${generateId()}`
            await s3Client.send(new PutObjectCommand({
                ACL: "authenticated-read",
                Bucket: env()?.SCW_BUCKET_NAME,
                Key: key,
                Body: Buffer.from(await body.file.arrayBuffer()),
                ContentType: type,
                Metadata: {
                    idCompany: c.var.company.id,
                    idYear: c.var.currentYear.id
                }
            }))

            const [createAttachment] = await db
                .insert(attachments)
                .values({
                    id: generateId(),
                    idCompany: c.var.company.id,
                    idYear: c.var.currentYear.id,
                    reference: body.reference,
                    label: body.label,
                    storageKey: key,
                    type: type,
                    size: size
                })
                .returning()

            return c.json(createAttachment, 200)
        }
    )
