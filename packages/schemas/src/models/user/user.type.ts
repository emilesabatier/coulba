import { userInclude } from "./user.include"
import { userModel } from "./user.model"


type UserInclude = keyof typeof userInclude
type UserModel = typeof userModel.$inferSelect

export type UserReturned = Pick<UserModel, UserInclude>
