import { createTransport } from "nodemailer"
import { env } from '../env.js'


const secretKey = env()?.SCW_SECRET_KEY
if (!secretKey) throw new Error("No smtp key")

export const smtpClient = createTransport({
    host: "smtp.tem.scw.cloud",
    port: 465,
    secure: true,
    auth: {
        user: "17d4af36-78b5-4175-8b2b-8f8c497b616b",
        pass: secretKey
    }
},
    {
        from: "Coulba <nepasrepondre@coulba.fr>"
    }
)
