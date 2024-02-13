import { createSelectSchema } from 'drizzle-valibot'
import { booleanSchema } from "../../components/schemas/boolean.schema"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { emailSchema } from "../../components/schemas/email.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { users } from "../../models"



export const userSchema = createSelectSchema(users, {
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
    lastInvitationSentAt: dateTimeSchema,
    lastUpdatedAt: dateTimeSchema,
    createdAt: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
