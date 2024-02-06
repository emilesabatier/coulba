import { createSelectSchema } from "drizzle-zod"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { textSchema } from "../../components/schemas/text.schema.js"
import { yearModel } from "./year.model.js"


export const yearSchema = createSelectSchema(yearModel, {
    id: idSchema,
    idCompany: idSchema,
    label: textSchema,
    startingAt: dateTimeSchema,
    endingAt: dateTimeSchema,
    lastUpdatedAt: dateTimeSchema,
    createdAt: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
