import { createSelectSchema } from 'drizzle-valibot'
import { booleanSchema } from '../../components/schemas/boolean.schema.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { years } from "../../models/index.js"
import { systems } from '../../components/values/systems.js'
import * as v from "valibot"

const yearSystemSchema = v.picklist(systems)

export const yearSchema = createSelectSchema(years, {
    id: idSchema,
    idCompany: idSchema,
    isSelected: booleanSchema,
    label: requiredTextSchema,
    startingOn: dateTimeSchema,
    endingOn: dateTimeSchema,
    system: yearSystemSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
