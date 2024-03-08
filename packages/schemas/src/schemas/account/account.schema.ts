import { createSelectSchema } from 'drizzle-valibot'
import { integerSchema } from "../../components"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { accounts } from "../../models"


export const accountSchema = createSelectSchema(accounts, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    idAccountParent: idSchema,
    label: textSchema,
    number: integerSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
