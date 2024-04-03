import { smtpClient } from "../../clients/email.js"
import { env } from "../../env.js"


type Options = {
    subject: string
    from?: string
    to: string | string[]
    html: string
    // attachments?: {
    //     content: Buffer | string | undefined
    //     filename: string
    // }[]
}

export async function sendEmail(options: Options) {
    try {
        const response = await smtpClient.sendMail(options)

        if (!response.accepted) throw new Error(response.rejected.toString())

        return true
    } catch (error) {
        if (env()?.ENV !== "production") console.log(error)
        return false
    }
}
