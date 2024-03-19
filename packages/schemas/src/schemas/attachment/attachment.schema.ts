import { createSelectSchema } from 'drizzle-valibot'
import { integerSchema } from '../../components'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema'
import { textSchema } from "../../components/schemas/text.schema"
import { attachments } from "../../models/attachments.model"


export const attachmentSchema = createSelectSchema(attachments, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    reference: requiredTextSchema,
    label: textSchema,
    storageKey: requiredTextSchema,
    type: requiredTextSchema,
    size: integerSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
