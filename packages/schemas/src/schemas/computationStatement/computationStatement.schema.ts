import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { operations } from '../../components/values/operations.js'
import { computationStatements } from '../../models/computationStatements.model.js'


const computationStatementOperationSchema = v.picklist(operations)

export const computationStatementSchema = createSelectSchema(computationStatements, {
    id: idSchema,
    idCompany: idSchema,
    idComputation: idSchema,
    idStatement: idSchema,
    operation: computationStatementOperationSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
