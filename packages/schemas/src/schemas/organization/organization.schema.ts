import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { organizationScopes } from '../../components/index.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { emailSchema } from '../../components/schemas/email.schema.js'
import { idSchema } from "../../components/schemas/id.schema.js"
import { sirenSchema } from "../../components/schemas/siren.schema.js"
import { textSchema } from "../../components/schemas/text.schema.js"
import { organizations } from "../../models/index.js"


export const organizationSchema = createSelectSchema(organizations, {
    id: idSchema,
    scope: v.picklist(organizationScopes),
    siren: v.nullish(sirenSchema),
    name: textSchema,
    email: v.nullish(emailSchema),
    apiKeyHash: textSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema
})
