import z from "zod"
import { accountSchema } from "../../schemas/account/account.schema"
import { attachmentSchema } from "../../schemas/attachment/attachment.schema"
import { entryInclude } from "../../schemas/entry/entry.include"
import { entrySchema } from "../../schemas/entry/entry.schema"
import { journalSchema } from "../../schemas/journal/journal.schema"
import { userInclude } from "../../schemas/user/user.include"
import { userSchema } from "../../schemas/user/user.schema"


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
