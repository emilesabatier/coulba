import { createSelectSchema } from 'drizzle-valibot'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { accountStatements } from '../../models/accountStatements.model.js'


export const accountStatementSchema = createSelectSchema(accountStatements, {
    id: idSchema,
    idOrganization: idSchema,
    idAccount: idSchema,
    idStatement: idSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
