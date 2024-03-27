import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { s3Client } from "../../../clients/storage"
import { env } from "../../../env"
import { bodyValidator } from "../../../middlewares/bodyValidator"
import { AuthEnv } from "../../../middlewares/checkAuth"


export const signedUrlRoute = new Hono<AuthEnv>()
    .patch(
        '/generate-get',
        validator("json", bodyValidator(auth.services.use.signedUrl.patch.generateGet.body)),
        async (c) => {
            const body = c.req.valid('json')

            const idCompany = body.storageKey.split("/").at(1)
            if (idCompany !== c.var.company.id) throw new HTTPException(500, { message: "File access is forbidden" })

            const signingDate = new Date()
            signingDate.setUTCHours(0, 0, 0, 0)
            signingDate.setUTCDate(signingDate.getUTCDate() - 1)

            const url = await getSignedUrl(
                s3Client,
                new GetObjectCommand({
                    Bucket: env()?.SCW_BUCKET_NAME,
                    Key: body.storageKey
                }),
                {
                    expiresIn: 604800,
                    signableHeaders: new Set<string>(),
                    signingDate: signingDate
                }
            )

            return c.json({ url: url }, 200)
        }
    )
    .patch(
        '/generate-put',
        validator("json", bodyValidator(auth.services.use.signedUrl.patch.generatePut.body)),
        async (c) => {
            const body = c.req.valid('json')

            if (body.size > 10000000) throw new HTTPException(500, { message: "File too large" })

            const key = `companies/${c.var.company.id}/${c.var.currentYear.id}/${generateId()}`

            const url = await getSignedUrl(
                s3Client,
                new PutObjectCommand({
                    ACL: "private",
                    Bucket: env()?.SCW_BUCKET_NAME,
                    Key: key,
                    ContentLength: body.size,
                    ContentType: body.contentType,
                    Metadata: {
                        idCompany: c.var.company.id,
                        idYear: c.var.currentYear.id,
                        idUser: c.var.user.id
                    }
                }),
                { expiresIn: 30 }
            )

            return c.json({ url: url, key: key }, 200)
        }
    )
    .patch(
        '/generate-delete',
        validator("json", bodyValidator(auth.services.use.signedUrl.patch.generateDelete.body)),
        async (c) => {
            const body = c.req.valid('json')

            const idCompany = body.storageKey.split("/").at(1)
            if (idCompany !== c.var.company.id) throw new HTTPException(500, { message: "File access is forbidden" })

            const url = await getSignedUrl(
                s3Client,
                new DeleteObjectCommand({
                    Bucket: env()?.SCW_BUCKET_NAME,
                    Key: body.storageKey
                }),
                { expiresIn: 30 }
            )

            return c.json({ url: url }, 200)
        }
    )
