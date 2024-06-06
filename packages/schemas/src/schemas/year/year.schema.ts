import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { systems } from '../../components/index.js'
import { booleanSchema } from '../../components/schemas/boolean.schema.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { years } from "../../models/index.js"


export const yearSchema = createSelectSchema(years, {
    id: idSchema,
    idOrganization: idSchema,
    idPreviousYear: idSchema,
    isClosed: booleanSchema,
    isSelected: booleanSchema,
    label: requiredTextSchema,
    startingOn: dateTimeSchema,
    endingOn: dateTimeSchema,
    system: v.picklist(systems),
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
