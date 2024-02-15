import { createSelectSchema } from 'drizzle-valibot'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { years } from "../../models"


export const yearSchema = createSelectSchema(years, {
    id: idSchema,
    idCompany: idSchema,
    label: textSchema,
    startingOn: dateTimeSchema,
    endingOn: dateTimeSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
