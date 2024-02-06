import { createSelectSchema } from "drizzle-zod"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { textSchema } from "../../components/schemas/text.schema.js"
import { journalModel } from "./journal.model.js"


export const journalSchema = createSelectSchema(journalModel, {
    id: idSchema,
    idCompany: idSchema,
    acronym: textSchema,
    label: textSchema,
    lastUpdatedAt: dateTimeSchema,
    createdAt: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
