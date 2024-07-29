import * as v from "valibot"
import { passwordSchema } from "../../../components/schemas/password.schema.js"
import { organizationSchema } from "../../../schemas/organization/organization.schema.js"
import { sessionSchema } from "../../../schemas/session/session.schema.js"
import { userSchema } from "../../../schemas/user/user.schema.js"
import { booleanSchema } from "../../../components/schemas/boolean.schema.js"


// Input
export const createOrganizationBody = v.object({
    scope: organizationSchema.entries.scope,
    isMinimalSystem: v.nullish(booleanSchema),
    user: v.object({
        email: userSchema.entries.email,
        password: passwordSchema,
        passwordCheck: passwordSchema
    })
})


// Output
export const createOrganizationReturn = sessionSchema
