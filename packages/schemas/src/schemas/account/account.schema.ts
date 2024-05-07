import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { integerSchema } from "../../components/index.js"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { systems } from '../../components/values/systems.js'
import { accounts } from "../../models/index.js"


const accountSystemSchema = v.picklist(systems)

export const accountSchema = createSelectSchema(accounts, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    idStatement: idSchema,
    idParent: idSchema,
    number: integerSchema,
    label: requiredTextSchema,
    system: accountSystemSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
