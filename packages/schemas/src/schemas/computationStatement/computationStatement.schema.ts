import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { operations } from '../../components/values/operations.js'
import { computationStatements } from '../../models/computationStatements.model.js'


export const computationStatementSchema = createSelectSchema(computationStatements, {
    id: idSchema,
    idOrganization: idSchema,
    idComputation: idSchema,
    idStatement: idSchema,
    operation: v.picklist(operations),
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
