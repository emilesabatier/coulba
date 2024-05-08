import { S3 } from '@aws-sdk/client-s3'
import { env } from '../env.js'


const endpoint = env()?.SCW_BUCKET_ENDPOINT
if (!endpoint) throw new Error("No storage endpoint")

const accessKey = env()?.SCW_ACCESS_KEY
const secretKey = env()?.SCW_SECRET_KEY
if (!accessKey || !secretKey) throw new Error("No database url")

export const s3Client = new S3({
    endpoint: endpoint,
    apiVersion: '2006-03-01',
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretKey
    },
    region: "fr-par"
})
