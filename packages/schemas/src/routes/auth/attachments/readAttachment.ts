import * as v from "valibot"
import { attachmentSchema } from "../../../schemas/attachment/attachment.schema"


// Input
export const readAttachmentParams = v.object({
    idAttachment: v.optional(attachmentSchema.entries.id)
})


// Output
export const readAttachmentReturn = attachmentSchema
