import * as v from "valibot"
import { accountSchema } from "../../../../schemas/account/account.schema"
import { journalSchema } from "../../../../schemas/journal/journal.schema"


// Input
export const computeResultBody = v.object({
    idJournalClosing: v.nonNullish(journalSchema.entries.id, "Le journal doit être renseigné"),
    idAccountProfit: v.nonNullish(accountSchema.entries.id, "Le compte doit être renseigné"),
    idAccountLoss: v.nonNullish(accountSchema.entries.id, "Le compte doit être renseigné")
})


// Output
export const computeResultReturn = v.object({})
