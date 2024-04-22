import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Input
export const validateInvitationBody = v.object({
    id: userSchema.entries.id,
    invitationToken: v.nonNullable(userSchema.entries.invitationToken)
})


// Output
export const validateInvitationReturn = v.object({})
