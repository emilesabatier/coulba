import { createSelectSchema } from 'drizzle-valibot'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { attachments } from "../../models/attachments.model"


export const attachmentSchema = createSelectSchema(attachments, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    reference: textSchema,
    label: textSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
