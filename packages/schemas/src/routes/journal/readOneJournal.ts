import z from "zod"
import { journalInclude } from "../../models/journal/journal.include"
import { journalSchema } from "../../models/journal/journal.schema"
import { userInclude } from "../../models/user/user.include"
import { userSchema } from "../../models/user/user.schema"


// Input
export const readOneJournalParams = journalSchema.pick({ id: true })
export type ReadOneJournalParams = z.infer<typeof readOneJournalParams>


// Output
export const readOneJournalReturn = journalSchema.pick(journalInclude).merge(z.object({
    lastUpdatedByUser: userSchema.pick(userInclude).nullable(),
    createdByUser: userSchema.pick(userInclude).nullable(),
}))
export type ReadOneJournalReturn = z.infer<typeof readOneJournalReturn>
