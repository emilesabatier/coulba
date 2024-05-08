import { createSelectSchema } from 'drizzle-valibot'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { journals } from "../../models/index.js"


export const journalSchema = createSelectSchema(journals, {
    id: idSchema,
    idCompany: idSchema,
    acronym: requiredTextSchema,
    label: requiredTextSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
