import * as v from "valibot"
import { attachmentSchema } from "../../../schemas/attachment/attachment.schema.js"


// Input
export const createAttachmentBody = v.object({
    reference: attachmentSchema.entries.reference,
    label: v.optional(attachmentSchema.entries.label),
    date: attachmentSchema.entries.date,
    storageKey: attachmentSchema.entries.storageKey,
    type: attachmentSchema.entries.type,
    size: attachmentSchema.entries.size
})


// Output
export const createAttachmentReturn = attachmentSchema
