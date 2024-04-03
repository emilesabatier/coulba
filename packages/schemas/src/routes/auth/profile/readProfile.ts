import * as v from "valibot"
import { userKeys } from "../../../schemas/user/user.include"
import { userSchema } from "../../../schemas/user/user.schema"


// Output
export const readProfileReturn = v.pick(userSchema, userKeys)
