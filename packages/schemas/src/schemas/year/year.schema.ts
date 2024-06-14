import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
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
    isMinimalSystem: booleanSchema,
    label: v.nonNullish(requiredTextSchema, "Un libellé doit être renseigné"),
    startingOn: v.nonNullish(dateTimeSchema, "Une date de début doit être renseignée"),
    endingOn: v.nonNullish(dateTimeSchema, "Une date de fin doit être renseignée"),
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
