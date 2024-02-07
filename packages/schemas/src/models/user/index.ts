import { userInclude } from "./user.include"
import { userModel } from "./user.model"
import { userWith } from "./user.with"


export * as userModel from "./user.model"
export type * from "./user.type"

export const user = {
    model: userModel,
    include: userInclude,
    with: userWith
}
