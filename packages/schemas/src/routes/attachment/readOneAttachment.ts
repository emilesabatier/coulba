import z from "zod"
import { attachmentInclude } from "../../models/attachment/attachment.include.js"
import { attachmentSchema } from "../../models/attachment/attachment.schema.js"
import { entrySchema } from "../../models/entry/entry.schema.js"
import { userInclude } from "../../models/user/user.include.js"
import { userSchema } from "../../models/user/user.schema.js"


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
