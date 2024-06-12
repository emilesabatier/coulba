import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { integerSchema, sides } from "../../components/index.js"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { sheets } from "../../models/index.js"


export const sheetSchema = createSelectSchema(sheets, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    idParent: idSchema,
    side: v.picklist(sides),
    number: integerSchema,
    label: requiredTextSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
