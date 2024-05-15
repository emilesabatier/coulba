import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Input
export const updateProfileBody = v.partial(v.object({
    alias: userSchema.entries.alias
}))


// Output
export const updateProfileReturn = userSchema
