import { createSelectSchema } from 'drizzle-valibot'
import { booleanSchema } from "../../components/schemas/boolean.schema.js"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { sessions } from "../../models/index.js"


export const sessionSchema = createSelectSchema(sessions, {
    id: idSchema,
    idUser: idSchema,
    expiresOn: dateTimeSchema,
    isActive: booleanSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema
})
