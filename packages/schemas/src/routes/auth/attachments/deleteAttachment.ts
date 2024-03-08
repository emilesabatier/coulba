import * as v from "valibot"
import { attachmentSchema } from "../../../schemas/attachment/attachment.schema"


// Input
export const deleteAttachmentParams = v.object({
    idAttachment: attachmentSchema.entries.id
})


// Output
export const deleteAttachmentReturn = attachmentSchema
