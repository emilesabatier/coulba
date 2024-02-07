import { createSelectSchema } from "drizzle-zod"
import { z } from "zod"
import { entryStates } from "../../components"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { numericSchema } from "../../components/schemas/numeric.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { entryModel } from "./entry.model"


const entryStateSchema = z.enum(entryStates)

export const entrySchema = createSelectSchema(entryModel, {
    id: idSchema,
    idCompany: idSchema,
    idAccount: idSchema,
    idJournal: idSchema,
    idAttachment: idSchema,
    state: entryStateSchema,
    label: textSchema,
    date: dateTimeSchema,
    debit: numericSchema,
    credit: numericSchema,
    lastUpdatedAt: dateTimeSchema,
    createdAt: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
