import * as v from "valibot"
import { userSchema } from "../../schemas/user/user.schema"


// Input
export const sendInvitationParams = v.object({
    idUser: userSchema.entries.id
})
