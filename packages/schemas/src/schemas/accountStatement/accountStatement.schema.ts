import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { flows } from '../../components/values/flows.js'
import { accountStatements } from '../../models/accountStatements.model.js'


const accountStatementFlowSchema = v.picklist(flows)

export const accountStatementSchema = createSelectSchema(accountStatements, {
    id: idSchema,
    idCompany: idSchema,
    idAccount: idSchema,
    idStatement: idSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
