import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { booleanSchema } from '../../components/schemas/boolean.schema'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { numericSchema } from "../../components/schemas/numeric.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { transactions } from '../../models/transactions.model'


export const transactionSchema = createSelectSchema(transactions, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    idAccount: idSchema,
    idJournal: idSchema,
    idAttachment: idSchema,
    idRecord: idSchema,
    isConfirmed: booleanSchema,
    label: v.nonNullish(textSchema, "Le libellé doit être renseigné"),
    date: v.nonNullish(dateTimeSchema, "La date doit être renseignée"),
    debit: numericSchema,
    credit: numericSchema,
    lastUpdatedOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdOn: dateTimeSchema,
    createdBy: idSchema
})
