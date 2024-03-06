import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { recordStates } from "../../components"
import { booleanSchema } from '../../components/schemas/boolean.schema'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { numericSchema } from "../../components/schemas/numeric.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { records } from "../../models"


const recordStateSchema = v.picklist(recordStates)

export const recordSchema = createSelectSchema(records, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    idAccount: idSchema,
    idJournal: idSchema,
    idAttachment: idSchema,
    isConfirmed: booleanSchema,
    label: textSchema,
    date: dateTimeSchema,
    debit: numericSchema,
    credit: numericSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
