import { users } from "models/user.model"
import { userInclude } from "./user.include"


type UserInclude = keyof typeof userInclude
type UserModel = typeof users.$inferSelect

export type UserReturned = Pick<UserModel, UserInclude>
