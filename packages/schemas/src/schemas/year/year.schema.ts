import { createSelectSchema } from 'drizzle-valibot'
import { booleanSchema } from '../../components/schemas/boolean.schema'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema'
import { years } from "../../models"


export const yearSchema = createSelectSchema(years, {
    id: idSchema,
    idCompany: idSchema,
    isSelected: booleanSchema,
    label: requiredTextSchema,
    startingOn: dateTimeSchema,
    endingOn: dateTimeSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
