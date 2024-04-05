import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Input
export const sendInvitationParams = v.object({
    idUser: userSchema.entries.id
})


// Output
export const sendInvitationReturn = v.object({})
