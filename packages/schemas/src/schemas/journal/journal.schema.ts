import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { textSchema } from '../../components/schemas/text.schema.js'
import { journals } from "../../models/index.js"


export const journalSchema = createSelectSchema(journals, {
    id: idSchema,
    idOrganization: idSchema,
    code: v.nonNullish(textSchema, "Un code doit être renseigné"),
    label: v.nonNullish(textSchema, "Un libellé doit être renseigné"),
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
