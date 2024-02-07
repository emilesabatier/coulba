import { createSelectSchema } from "drizzle-zod"
import { booleanSchema } from "../../components/schemas/boolean.schema"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { ipSchema } from "../../components/schemas/ip.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { sessionModel } from "./session.model"


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
