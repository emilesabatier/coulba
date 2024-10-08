import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { integerSchema } from '../../components/index.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { textSchema } from "../../components/schemas/text.schema.js"
import { attachments } from "../../models/attachments.model.js"


export const attachmentSchema = createSelectSchema(attachments, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    reference: v.nonNullish(textSchema, "La référence doit être renseignée"),
    label: textSchema,
    date: v.nonNullish(dateTimeSchema, "La date doit être renseignée"),
    storageKey: requiredTextSchema,
    type: requiredTextSchema,
    size: integerSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
