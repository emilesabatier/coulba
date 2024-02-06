import { createSelectSchema } from "drizzle-zod"
import { integerSchema } from "../../components/index.js"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { textSchema } from "../../components/schemas/text.schema.js"
import { accountModel } from "./account.model.js"


export const accountSchema = createSelectSchema(accountModel, {
    id: idSchema,
    idCompany: idSchema,
    idAccountParent: idSchema,
    label: textSchema,
    number: integerSchema,
    lastUpdatedAt: dateTimeSchema,
    createdAt: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
