import { createSelectSchema } from "drizzle-zod"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { textSchema } from "../../components/schemas/text.schema.js"
import { attachmentModel } from "./attachment.model.js"


export const attachmentSchema = createSelectSchema(attachmentModel, {
    id: idSchema,
    idCompany: idSchema,
    reference: textSchema,
    label: textSchema,
    lastUpdatedAt: dateTimeSchema,
    createdAt: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
