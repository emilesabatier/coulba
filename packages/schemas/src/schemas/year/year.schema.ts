import { createSelectSchema } from 'drizzle-valibot'
import { booleanSchema } from '../../components/schemas/boolean.schema.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { years } from "../../models/index.js"


export const yearSchema = createSelectSchema(years, {
    id: idSchema,
    idOrganization: idSchema,
    idPreviousYear: idSchema,
    isClosed: booleanSchema,
    isSelected: booleanSchema,
    isWithOptionalAccounts: booleanSchema,
    label: requiredTextSchema,
    startingOn: dateTimeSchema,
    endingOn: dateTimeSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
