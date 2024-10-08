import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { numericSchema } from "../../components/schemas/numeric.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { rows } from '../../models/rows.model.js'


export const rowSchema = createSelectSchema(rows, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    idAccount: v.nonNullish(idSchema, "Le compte mouvementé doit être renseigné"),
    label: v.nonNullish(requiredTextSchema, "Le libellé doit être renseigné"),
    debit: numericSchema,
    credit: numericSchema,
    lastUpdatedOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdOn: dateTimeSchema,
    createdBy: idSchema
})
