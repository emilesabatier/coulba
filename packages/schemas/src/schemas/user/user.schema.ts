import { createSelectSchema } from 'drizzle-valibot'
import { booleanSchema } from "../../components/schemas/boolean.schema.js"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { emailSchema } from "../../components/schemas/email.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { textSchema } from "../../components/schemas/text.schema.js"
import { users } from '../../models/index.js'



export const userSchema = createSelectSchema(users, {
    id: idSchema,
    idCompany: idSchema,
    isAdmin: booleanSchema,
    forename: requiredTextSchema,
    surname: requiredTextSchema,
    email: emailSchema,
    isEmailValidated: booleanSchema,
    emailToValidate: emailSchema,
    emailToken: textSchema,
    emailTokenExpiresOn: dateTimeSchema,
    passwordHash: textSchema,
    passwordSalt: textSchema,
    isActive: booleanSchema,
    invitationToken: textSchema,
    isInvitationValidated: booleanSchema,
    invitationTokenExpiresOn: dateTimeSchema,
    invitationLastSentOn: dateTimeSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
