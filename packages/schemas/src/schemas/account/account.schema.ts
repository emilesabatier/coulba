import { createSelectSchema } from "drizzle-zod"
import { integerSchema } from "../../components"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { accounts } from "models"


export const accountSchema = createSelectSchema(accounts, {
    id: idSchema,
    idYear: idSchema,
    idAccountParent: idSchema,
    label: textSchema,
    number: integerSchema,
    lastUpdatedAt: dateTimeSchema,
    createdAt: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
