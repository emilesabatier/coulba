import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { booleanSchema } from '../../components/schemas/boolean.schema.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { textSchema } from '../../components/schemas/text.schema.js'
import { records } from '../../models/records.model.js'


export const recordSchema = createSelectSchema(records, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    idJournal: idSchema,
    idAttachment: idSchema,
    idAutomatic: textSchema,
    isValidated: booleanSchema,
    validatedOn: dateTimeSchema,
    label: v.nonNullish(requiredTextSchema, "Le libellé doit être renseigné"),
    date: v.nonNullish(dateTimeSchema, "La date doit être renseignée"),
    lastUpdatedOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdOn: dateTimeSchema,
    createdBy: idSchema
})
