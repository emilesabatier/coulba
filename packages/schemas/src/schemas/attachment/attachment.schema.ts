import { createSelectSchema } from "drizzle-zod"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { attachments } from "models"


export const attachmentSchema = createSelectSchema(attachments, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    reference: textSchema,
    label: textSchema,
    lastUpdatedAt: dateTimeSchema,
    createdAt: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
