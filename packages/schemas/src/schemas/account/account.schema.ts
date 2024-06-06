import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { integerSchema, types } from "../../components/index.js"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { systems } from '../../components/values/systems.js'
import { accounts } from "../../models/index.js"


export const accountSchema = createSelectSchema(accounts, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    idParent: idSchema,
    number: integerSchema,
    label: requiredTextSchema,
    type: v.picklist(types),
    system: v.picklist(systems),
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
