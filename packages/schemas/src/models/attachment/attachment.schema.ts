import { createSelectSchema } from "drizzle-zod"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { attachmentModel } from "./attachment.model"


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
