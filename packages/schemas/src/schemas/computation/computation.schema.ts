import { createSelectSchema } from 'drizzle-valibot'
import { integerSchema } from '../../components/index.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { computations } from '../../models/computations.model.js'


export const computationSchema = createSelectSchema(computations, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    number: integerSchema,
    label: requiredTextSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
