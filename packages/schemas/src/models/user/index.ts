import { userInclude } from "./user.include.js"
import { userModel } from "./user.model.js"
import { userWith } from "./user.with.js"


export * as userModel from "./user.model.js"
export type * from "./user.type.js"

export const user = {
    model: userModel,
    include: userInclude,
    with: userWith
}
