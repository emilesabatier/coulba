import { createSelectSchema } from 'drizzle-valibot'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { sirenSchema } from "../../components/schemas/siren.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { companies } from "../../models"


export const companySchema = createSelectSchema(companies, {
    id: idSchema,
    siren: sirenSchema,
    name: textSchema,
    apiKey: textSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema
})
