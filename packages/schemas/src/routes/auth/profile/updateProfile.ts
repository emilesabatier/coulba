import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Input
export const updateProfileBody = v.partial(v.object({
    forename: userSchema.entries.forename,
    surname: userSchema.entries.surname
}))


// Output
export const updateProfileReturn = userSchema
