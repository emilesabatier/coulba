import * as v from "valibot"
import { journalSchema } from "../../schemas/journal/journal.schema"
import { userKeys } from "../../schemas/user/user.include"
import { userSchema } from "../../schemas/user/user.schema"


// Input
export const readOneJournalParams = v.object({
    idJournal: journalSchema.entries.id
})

// Output
export const readOneJournalReturn = v.merge([
    journalSchema,
    v.object({
        lastUpdatedByUser: v.nullable(v.pick(userSchema, userKeys)),
        createdByUser: v.nullable(v.pick(userSchema, userKeys)),
    })
])
