import { createSelectSchema } from 'drizzle-valibot'
import { integerSchema } from "../../components"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { accounts } from "../../models"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema'


export const accountSchema = createSelectSchema(accounts, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    idAccountParent: idSchema,
    label: requiredTextSchema,
    number: integerSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
