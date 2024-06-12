import * as v from "valibot"
import { accountSchema } from "../../../../schemas/account/account.schema"
import { journalSchema } from "../../../../schemas/journal/journal.schema"


// Input
export const computeResultBody = v.object({
    idJournalClosing: journalSchema.entries.id,
    idAccountProfit: accountSchema.entries.id,
    idAccountLost: accountSchema.entries.id
})


// Output
export const computeResultReturn = v.object({})
