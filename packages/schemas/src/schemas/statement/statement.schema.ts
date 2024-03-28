import { createSelectSchema } from 'drizzle-valibot'
import { integerSchema } from "../../components"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema'
import { statements } from "../../models"


export const statementSchema = createSelectSchema(statements, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    idStatementParent: idSchema,
    number: integerSchema,
    label: requiredTextSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
