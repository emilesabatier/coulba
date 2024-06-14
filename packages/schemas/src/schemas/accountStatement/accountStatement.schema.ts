import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { accountStatements } from '../../models/accountStatements.model.js'


export const accountStatementSchema = createSelectSchema(accountStatements, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    idAccount: v.nonNullish(idSchema, "Un compte lié doit être renseigné"),
    idStatement: idSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
