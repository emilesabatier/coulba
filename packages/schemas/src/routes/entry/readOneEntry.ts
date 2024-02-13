import * as v from "valibot"
import { accountSchema } from "../../schemas/account/account.schema"
import { attachmentSchema } from "../../schemas/attachment/attachment.schema"
import { entrySchema } from "../../schemas/entry/entry.schema"
import { journalSchema } from "../../schemas/journal/journal.schema"
import { userKeys } from "../../schemas/user/user.include"
import { userSchema } from "../../schemas/user/user.schema"


// Input
export const readOneEntryParams = v.object({
    idEntry: entrySchema.entries.id
})

// Output
export const readOneEntryReturn = v.merge([
    entrySchema,
    v.object({
        account: accountSchema,
        journal: v.nullable(journalSchema),
        attachment: v.nullable(attachmentSchema),
        lastUpdatedByUser: v.nullable(v.pick(userSchema, userKeys)),
        createdByUser: v.nullable(v.pick(userSchema, userKeys)),
    })
])
