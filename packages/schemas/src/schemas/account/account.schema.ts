import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { integerSchema, types } from "../../components/index.js"
import { booleanSchema } from '../../components/schemas/boolean.schema.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { accounts } from "../../models/index.js"


export const accountSchema = createSelectSchema(accounts, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    idParent: idSchema,
    isOptional: booleanSchema,
    number: integerSchema,
    label: requiredTextSchema,
    type: v.picklist(types),
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
