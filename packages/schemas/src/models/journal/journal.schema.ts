import { createSelectSchema } from "drizzle-zod"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { journalModel } from "./journal.model"


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
