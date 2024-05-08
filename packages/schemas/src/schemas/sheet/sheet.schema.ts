import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { integerSchema } from "../../components/index.js"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { sheetSides } from '../../components/values/sheetSide.js'
import { sheets } from "../../models/index.js"


const sheetSideSchema = v.picklist(sheetSides)

export const sheetSchema = createSelectSchema(sheets, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    idParent: idSchema,
    side: sheetSideSchema,
    number: integerSchema,
    label: requiredTextSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
