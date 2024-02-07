import z from "zod"
import { attachmentSchema } from "../../models/attachment/attachment.schema"


// Input
export const updateOneAttachmentParams = attachmentSchema.pick({ id: true })
export type UpdateOneAttachmentParams = z.infer<typeof updateOneAttachmentParams>

export const updateOneAttachmentBody = z.object({
    reference: attachmentSchema.shape.reference,
    label: attachmentSchema.shape.label
}).partial()
export type UpdateOneAttachmentBody = z.infer<typeof updateOneAttachmentBody>


// Output
export const updateOneAttachmentReturn = attachmentSchema.pick({ id: true })
export type UpdateOneAttachmentReturn = z.infer<typeof updateOneAttachmentReturn>
