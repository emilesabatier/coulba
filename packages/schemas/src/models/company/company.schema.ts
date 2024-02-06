import { createSelectSchema } from "drizzle-zod"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { sirenSchema } from "../../components/schemas/siren.schema.js"
import { textSchema } from "../../components/schemas/text.schema.js"
import { companyModel } from "./company.model.js"


export const companySchema = createSelectSchema(companyModel, {
    id: idSchema,
    siren: sirenSchema,
    name: textSchema,
    lastUpdatedAt: dateTimeSchema,
    createdAt: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
