import { userInclude } from "./user.include.js"
import { userModel } from "./user.model.js"


type UserInclude = keyof typeof userInclude
type UserModel = typeof userModel.$inferSelect

export type UserReturned = Pick<UserModel, UserInclude>
