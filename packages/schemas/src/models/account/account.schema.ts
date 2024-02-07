import { createSelectSchema } from "drizzle-zod"
import { integerSchema } from "../../components"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { accountModel } from "./account.model"


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
