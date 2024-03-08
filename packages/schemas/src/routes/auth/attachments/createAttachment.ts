import * as v from "valibot"
import { attachmentSchema } from "../../../schemas/attachment/attachment.schema"


// Input
export const createAttachmentBody = v.object({
    idYear: attachmentSchema.entries.idYear,
    reference: attachmentSchema.entries.reference,
    label: v.optional(attachmentSchema.entries.label)
})


// Output
export const createAttachmentReturn = attachmentSchema
