import z from "zod"
import { journalInclude } from "../../models/journal/journal.include.js"
import { journalSchema } from "../../models/journal/journal.schema.js"
import { userInclude } from "../../models/user/user.include.js"
import { userSchema } from "../../models/user/user.schema.js"


// Input
export const readOneJournalParams = journalSchema.pick({ id: true })
export type ReadOneJournalParams = z.infer<typeof readOneJournalParams>


// Output
export const readOneJournalReturn = journalSchema.pick(journalInclude).merge(z.object({
    lastUpdatedByUser: userSchema.pick(userInclude).nullable(),
    createdByUser: userSchema.pick(userInclude).nullable(),
}))
export type ReadOneJournalReturn = z.infer<typeof readOneJournalReturn>
