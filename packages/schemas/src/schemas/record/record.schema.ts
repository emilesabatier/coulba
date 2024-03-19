import { createSelectSchema } from 'drizzle-valibot'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { numericSchema } from "../../components/schemas/numeric.schema"
import { records } from "../../models"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema'


export const recordSchema = createSelectSchema(records, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    idAccount: idSchema,
    idJournal: idSchema,
    idAttachment: idSchema,
    label: requiredTextSchema,
    date: dateTimeSchema,
    debit: numericSchema,
    credit: numericSchema,
    createdOn: dateTimeSchema,
    createdBy: idSchema
})
