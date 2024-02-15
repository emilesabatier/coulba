import * as v from "valibot"
import { attachmentSchema } from "../../../schemas/attachment/attachment.schema"


// Input
export const updateOneAttachmentParams = v.object({
    idAttachment: attachmentSchema.entries.id
})

export const updateOneAttachmentBody = v.partial(v.object({
    idYear: attachmentSchema.entries.idYear,
    reference: attachmentSchema.entries.reference,
    label: attachmentSchema.entries.label
}))


// Output
export const updateOneAttachmentReturn = attachmentSchema
