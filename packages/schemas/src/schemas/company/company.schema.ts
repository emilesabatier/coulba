import { createSelectSchema } from 'drizzle-valibot'
import { booleanSchema } from '../../components/schemas/boolean.schema'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { emailSchema } from '../../components/schemas/email.schema'
import { idSchema } from "../../components/schemas/id.schema"
import { sirenSchema } from "../../components/schemas/siren.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { companies } from "../../models"


export const companySchema = createSelectSchema(companies, {
    id: idSchema,
    siren: sirenSchema,
    isValid: booleanSchema,
    email: emailSchema,
    apiKey: textSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema
})
