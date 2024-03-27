import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema"
import { userIncludeKeys } from "../../../schemas/user/user.include"


// Output
export const readProfileReturn = v.pick(userSchema, userIncludeKeys)
