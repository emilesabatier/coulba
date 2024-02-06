import { createSelectSchema } from "drizzle-zod"
import { booleanSchema } from "../../components/schemas/boolean.schema.js"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { ipSchema } from "../../components/schemas/ip.schema.js"
import { textSchema } from "../../components/schemas/text.schema.js"
import { sessionModel } from "./session.model.js"


export const sessionSchema = createSelectSchema(sessionModel, {
    id: idSchema,
    idUser: idSchema,
    ip: ipSchema,
    token: textSchema,
    expiresAt: dateTimeSchema,
    isActive: booleanSchema,
    lastUpdatedAt: dateTimeSchema,
    createdAt: dateTimeSchema
})
