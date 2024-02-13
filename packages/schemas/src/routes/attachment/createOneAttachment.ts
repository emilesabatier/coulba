import * as v from "valibot"
import { attachmentSchema } from "../../schemas/attachment/attachment.schema"


// Input
export const createOneAttachmentBody = v.object({
    reference: attachmentSchema.entries.reference,
    label: v.optional(attachmentSchema.entries.label)
})


// Output
export const createOneAttachmentReturn = attachmentSchema
