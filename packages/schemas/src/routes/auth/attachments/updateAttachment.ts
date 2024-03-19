import * as v from "valibot"
import { attachmentSchema } from "../../../schemas/attachment/attachment.schema"


// Input
export const updateAttachmentParams = v.object({
    idAttachment: attachmentSchema.entries.id
})

export const updateAttachmentBody = v.partial(v.object({
    reference: attachmentSchema.entries.reference,
    label: attachmentSchema.entries.label,
    storageKey: attachmentSchema.entries.storageKey,
    type: attachmentSchema.entries.type,
    size: attachmentSchema.entries.size
}))


// Output
export const updateAttachmentReturn = attachmentSchema
