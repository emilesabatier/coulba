import { createSelectSchema } from 'drizzle-valibot'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { journals } from "../../models"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema'


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
