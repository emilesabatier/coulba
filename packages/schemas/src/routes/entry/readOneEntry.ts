import z from "zod"
import { accountSchema } from "../../models/account/account.schema"
import { attachmentSchema } from "../../models/attachment/attachment.schema"
import { entryInclude } from "../../models/entry/entry.include"
import { entrySchema } from "../../models/entry/entry.schema"
import { journalSchema } from "../../models/journal/journal.schema"
import { userInclude } from "../../models/user/user.include"
import { userSchema } from "../../models/user/user.schema"


// Input
export const readOneEntryParams = entrySchema.pick({ id: true })
export type ReadOneEntryParams = z.infer<typeof readOneEntryParams>


// Output
export const readOneEntryReturn = entrySchema.pick(entryInclude).merge(z.object({
    account: accountSchema,
    journal: journalSchema.nullable(),
    attachment: attachmentSchema.nullable(),
    lastUpdatedByUser: userSchema.pick(userInclude).nullable(),
    createdByUser: userSchema.pick(userInclude).nullable(),
}))
export type ReadOneEntryReturn = z.infer<typeof readOneEntryReturn>
