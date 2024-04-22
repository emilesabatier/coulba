import { createSelectSchema } from 'drizzle-valibot'
import { integerSchema } from "../../components/index.js"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { accounts } from "../../models/index.js"


export const accountSchema = createSelectSchema(accounts, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    idSheet: idSchema,
    idStatement: idSchema,
    idAccountParent: idSchema,
    label: requiredTextSchema,
    number: integerSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
