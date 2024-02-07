import { createSelectSchema } from "drizzle-zod"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { sirenSchema } from "../../components/schemas/siren.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { companyModel } from "./company.model"


export const companySchema = createSelectSchema(companyModel, {
    id: idSchema,
    siren: sirenSchema,
    name: textSchema,
    lastUpdatedAt: dateTimeSchema,
    createdAt: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
