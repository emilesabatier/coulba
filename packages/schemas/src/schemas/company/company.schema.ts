import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { emailSchema } from '../../components/schemas/email.schema.js'
import { idSchema } from "../../components/schemas/id.schema.js"
import { sirenSchema } from "../../components/schemas/siren.schema.js"
import { textSchema } from "../../components/schemas/text.schema.js"
import { companies } from "../../models/index.js"


export const companySchema = createSelectSchema(companies, {
    id: idSchema,
    siren: v.nullish(sirenSchema),
    name: textSchema,
    email: v.nullish(emailSchema),
    apiKeyHash: textSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema
})
