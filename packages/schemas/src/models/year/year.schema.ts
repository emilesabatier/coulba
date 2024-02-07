import { createSelectSchema } from "drizzle-zod"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { yearModel } from "./year.model"


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
