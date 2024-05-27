import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { booleanSchema } from '../../components/schemas/boolean.schema.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { numericSchema } from "../../components/schemas/numeric.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { transactions } from '../../models/transactions.model.js'


export const transactionSchema = createSelectSchema(transactions, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    idAccount: v.nonNullish(idSchema, "Le compte mouvementé doit être renseigné"),
    idJournal: idSchema,
    idAttachment: idSchema,
    isConfirmed: booleanSchema,
    label: v.nonNullish(requiredTextSchema, "Le libellé doit être renseigné"),
    date: v.nonNullish(dateTimeSchema, "La date doit être renseignée"),
    debit: numericSchema,
    credit: numericSchema,
    lastUpdatedOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdOn: dateTimeSchema,
    createdBy: idSchema
})
