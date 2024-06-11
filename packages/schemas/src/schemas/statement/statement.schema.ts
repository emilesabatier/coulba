import { createSelectSchema } from 'drizzle-valibot'
import { integerSchema } from "../../components/index.js"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { numericSchema } from '../../components/schemas/numeric.schema.js'
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { statements } from "../../models/index.js"


export const statementSchema = createSelectSchema(statements, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    idParent: idSchema,
    number: integerSchema,
    label: requiredTextSchema,
    net: numericSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
