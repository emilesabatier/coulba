import * as v from "valibot"
import { fileSchema } from "../../../components/index.js"
import { attachmentSchema } from "../../../schemas/attachment/attachment.schema.js"


// Input
export const createAttachmentBody = v.object({
    reference: attachmentSchema.entries.reference,
    label: v.optional(attachmentSchema.entries.label),
    file: fileSchema
})


// Output
export const createAttachmentReturn = attachmentSchema
