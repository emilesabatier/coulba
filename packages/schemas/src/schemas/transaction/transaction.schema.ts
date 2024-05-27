import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { transactions } from '../../models/transactions.model.js'
import { booleanSchema } from '../../components/schemas/boolean.schema.js'


export const transactionSchema = createSelectSchema(transactions, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    isConfirmed: booleanSchema,
    label: v.nonNullish(requiredTextSchema, "Le libellé doit être renseigné"),
    date: v.nonNullish(dateTimeSchema, "La date doit être renseignée"),
    lastUpdatedOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdOn: dateTimeSchema,
    createdBy: idSchema
})
