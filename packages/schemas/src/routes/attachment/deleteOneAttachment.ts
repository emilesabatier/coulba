import z from "zod"
import { attachmentSchema } from "../../models/attachment/attachment.schema"


// Input
export const deleteOneAttachmentParams = attachmentSchema.pick({ id: true })
export type DeleteOneAttachmentParams = z.infer<typeof deleteOneAttachmentParams>


// Output
export const deleteOneAttachmentReturn = attachmentSchema.pick({ id: true })
export type DeleteOneAttachmentReturn = z.infer<typeof deleteOneAttachmentReturn>
