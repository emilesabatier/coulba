import { createSelectSchema } from 'drizzle-valibot'
import { booleanSchema } from "../../components/schemas/boolean.schema"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { sessions } from "../../models"


export const sessionSchema = createSelectSchema(sessions, {
    id: idSchema,
    idUser: idSchema,
    expiresOn: dateTimeSchema,
    isActive: booleanSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema
})
