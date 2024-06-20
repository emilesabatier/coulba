import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { integerSchema, sides } from "../../components/index.js"
import { booleanSchema } from '../../components/schemas/boolean.schema.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { numericSchema } from '../../components/schemas/numeric.schema.js'
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { sheets } from "../../models/index.js"


export const sheetSchema = createSelectSchema(sheets, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    idParent: v.nonNullish(idSchema, "Un parent doit être renseigné"),
    isDefault: booleanSchema,
    side: v.picklist(sides),
    number: v.nonNullish(integerSchema, "Un numéro doit être renseigné"),
    label: v.nonNullish(requiredTextSchema, "Un libellé doit être renseigné"),
    addedGrossAmount: numericSchema,
    addedAllowanceAmount: numericSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
