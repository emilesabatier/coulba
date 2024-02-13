import * as v from "valibot"
import { attachmentSchema } from "../../schemas/attachment/attachment.schema"


// Input
export const deleteOneAttachmentParams = v.object({
    idAttachment: attachmentSchema.entries.id
})


// Output
export const deleteOneAttachmentReturn = attachmentSchema
