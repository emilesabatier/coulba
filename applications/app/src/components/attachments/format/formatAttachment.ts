import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


export function formatAttachment(attachment: v.Output<typeof auth.attachments.get.return>) {
    if (!attachment.label) return attachment.reference
    return `${attachment.reference} (${attachment.label})`
}
