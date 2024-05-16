import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { booleanSchema } from '../../components/schemas/boolean.schema.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { systems } from '../../components/values/systems.js'
import { years } from "../../models/index.js"

const yearSystemSchema = v.picklist(systems)

export const yearSchema = createSelectSchema(years, {
    id: idSchema,
    idCompany: idSchema,
    idPreviousYear: idSchema,
    isClosed: booleanSchema,
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
