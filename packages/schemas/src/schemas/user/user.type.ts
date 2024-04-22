import { users } from "../../models/index.js"
import { userInclude } from "./user.include.js"


type UserInclude = keyof typeof userInclude
type UserModel = typeof users.$inferSelect

export type UserReturned = Pick<UserModel, UserInclude>
