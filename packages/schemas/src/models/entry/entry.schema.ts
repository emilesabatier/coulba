import { createSelectSchema } from "drizzle-zod"
import { z } from "zod"
import { entryStates } from "../../components/index.js"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { numericSchema } from "../../components/schemas/numeric.schema.js"
import { textSchema } from "../../components/schemas/text.schema.js"
import { entryModel } from "./entry.model.js"


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
