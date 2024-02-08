import z from "zod"
import { attachmentInclude } from "../../schemas/attachment/attachment.include"
import { attachmentSchema } from "../../schemas/attachment/attachment.schema"
import { entrySchema } from "../../schemas/entry/entry.schema"
import { userInclude } from "../../schemas/user/user.include"
import { userSchema } from "../../schemas/user/user.schema"


// Input
export const readOneAttachmentParams = attachmentSchema.pick({ id: true })
export type ReadOneAttachmentParams = z.infer<typeof readOneAttachmentParams>


// Output
export const readOneAttachmentReturn = attachmentSchema.pick(attachmentInclude).merge(z.object({
    entries: entrySchema.array(),
    lastUpdatedByUser: userSchema.pick(userInclude).nullable(),
    createdByUser: userSchema.pick(userInclude).nullable(),
}))
export type ReadOneAttachmentReturn = z.infer<typeof readOneAttachmentReturn>
