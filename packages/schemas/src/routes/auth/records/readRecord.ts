import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema"
import { attachmentSchema } from "../../../schemas/attachment/attachment.schema"
import { journalSchema } from "../../../schemas/journal/journal.schema"
import { recordSchema } from "../../../schemas/record/record.schema"
import { userKeys } from "../../../schemas/user/user.include"
import { userSchema } from "../../../schemas/user/user.schema"


// Input
export const readRecordParams = v.object({
    idRecord: v.optional(recordSchema.entries.id)
})

// Output
export const readRecordReturn = v.merge([
    recordSchema,
    v.object({
        account: accountSchema,
        journal: v.nullable(journalSchema),
        attachment: v.nullable(attachmentSchema),
        lastUpdatedByUser: v.nullable(v.pick(userSchema, userKeys)),
        createdByUser: v.nullable(v.pick(userSchema, userKeys)),
    })
])
