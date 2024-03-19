import { createSelectSchema } from 'drizzle-valibot'
import { booleanSchema } from "../../components/schemas/boolean.schema"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { emailSchema } from "../../components/schemas/email.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { textSchema } from "../../components/schemas/text.schema"
import { users } from '../../models'
import { requiredTextSchema } from '../../components/schemas/requiredText.schema'



export const userSchema = createSelectSchema(users, {
    id: idSchema,
    idCompany: idSchema,
    isAdmin: booleanSchema,
    forename: requiredTextSchema,
    surname: requiredTextSchema,
    email: emailSchema,
    emailTemporary: emailSchema,
    emailToken: textSchema,
    emailTokenExpiresAt: dateTimeSchema,
    passwordHash: textSchema,
    passwordSalt: textSchema,
    isActive: booleanSchema,
    invitationToken: textSchema,
    invitationLastSentOn: dateTimeSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
