import * as v from "valibot"
import { attachmentSchema } from "../../schemas/attachment/attachment.schema"
import { entrySchema } from "../../schemas/entry/entry.schema"
import { userKeys } from "../../schemas/user/user.include"
import { userSchema } from "../../schemas/user/user.schema"


// Input
export const readOneAttachmentParams = v.object({
    idAttachment: attachmentSchema.entries.id
})


// Output
export const readOneAttachmentReturn = v.merge([
    attachmentSchema,
    v.object({
        entries: v.array(entrySchema),
        lastUpdatedByUser: v.nullable(v.pick(userSchema, userKeys)),
        createdByUser: v.nullable(v.pick(userSchema, userKeys)),
    })
])
