import { createSelectSchema } from 'drizzle-valibot'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { numericSchema } from "../../components/schemas/numeric.schema"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema'
import { records } from "../../models"


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
