import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { integerSchema } from "../../components/index.js"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { statements } from "../../models/index.js"


export const statementSchema = createSelectSchema(statements, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    idParent: v.nonNullish(idSchema, "Un parent doit être renseigné"),
    number: v.nonNullish(integerSchema, "Un numéro doit être renseigné"),
    label: v.nonNullish(requiredTextSchema, "Un libellé doit être renseigné"),
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
