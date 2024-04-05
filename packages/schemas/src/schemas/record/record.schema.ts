import { createSelectSchema } from 'drizzle-valibot'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { numericSchema } from "../../components/schemas/numeric.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { records } from "../../models/index.js"


export const recordSchema = createSelectSchema(records, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    idAccount: idSchema,
    idJournal: idSchema,
    idAttachment: idSchema,
    idTransaction: idSchema,
    label: requiredTextSchema,
    date: dateTimeSchema,
    debit: numericSchema,
    credit: numericSchema,
    createdOn: dateTimeSchema,
    createdBy: idSchema
})
