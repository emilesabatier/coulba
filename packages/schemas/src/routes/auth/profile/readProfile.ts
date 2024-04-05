import * as v from "valibot"
import { userKeys } from "../../../schemas/user/user.include.js"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Output
export const readProfileReturn = v.pick(userSchema, userKeys)
