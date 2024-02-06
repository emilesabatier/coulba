import { createSelectSchema } from "drizzle-zod"
import { booleanSchema } from "../../components/schemas/boolean.schema.js"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { emailSchema } from "../../components/schemas/email.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { textSchema } from "../../components/schemas/text.schema.js"
import { userModel } from "./user.model.js"



export const userSchema = createSelectSchema(userModel, {
    id: idSchema,
    idCompany: idSchema,
    isAdmin: booleanSchema,
    forename: textSchema,
    surname: textSchema,
    emailAddress: emailSchema,
    emailAddressTemporary: emailSchema,
    emailToken: textSchema,
    emailTokenExpiresAt: dateTimeSchema,
    passwordHash: textSchema,
    passwordTemporary: textSchema,
    passwordTemporaryHash: textSchema,
    passwordSalt: textSchema,
    isActive: booleanSchema,
    lastCredentialsSentAt: dateTimeSchema,
    lastUpdatedAt: dateTimeSchema,
    createdAt: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
