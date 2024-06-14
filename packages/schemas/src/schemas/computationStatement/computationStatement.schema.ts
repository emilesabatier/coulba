import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { operations } from '../../components/values/operations.js'
import { computationStatements } from '../../models/computationStatements.model.js'


export const computationStatementSchema = createSelectSchema(computationStatements, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    idComputation: idSchema,
    idStatement: v.nonNullish(idSchema, "Une ligne doit être renseignée"),
    operation: v.nonNullish(v.picklist(operations), "Une opération doit être renseignée"),
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
