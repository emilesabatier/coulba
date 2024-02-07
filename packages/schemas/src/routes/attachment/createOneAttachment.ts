import { z } from "zod"
import { attachmentSchema } from "../../models/attachment/attachment.schema"


// Input
export const createOneAttachmentBody = z.object({
    reference: attachmentSchema.shape.reference,
    label: attachmentSchema.shape.label.optional()
})
export type CreateOneAttachmentBody = z.infer<typeof createOneAttachmentBody>


// Output
export const createOneAttachmentReturn = attachmentSchema.pick({ id: true })
export type CreateOneAttachmentReturn = z.infer<typeof createOneAttachmentReturn>
