import z from "zod"
import { attachmentInclude } from "../../models/attachment/attachment.include"
import { attachmentSchema } from "../../models/attachment/attachment.schema"
import { entrySchema } from "../../models/entry/entry.schema"
import { userInclude } from "../../models/user/user.include"
import { userSchema } from "../../models/user/user.schema"


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
