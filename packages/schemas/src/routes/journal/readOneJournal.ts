import z from "zod"
import { journalInclude } from "../../schemas/journal/journal.include"
import { journalSchema } from "../../schemas/journal/journal.schema"
import { userInclude } from "../../schemas/user/user.include"
import { userSchema } from "../../schemas/user/user.schema"


// Input
export const readOneJournalParams = journalSchema.pick({ id: true })
export type ReadOneJournalParams = z.infer<typeof readOneJournalParams>


// Output
export const readOneJournalReturn = journalSchema.pick(journalInclude).merge(z.object({
    lastUpdatedByUser: userSchema.pick(userInclude).nullable(),
    createdByUser: userSchema.pick(userInclude).nullable(),
}))
export type ReadOneJournalReturn = z.infer<typeof readOneJournalReturn>
