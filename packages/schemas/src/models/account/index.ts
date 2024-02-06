import { accountInclude } from "./account.include.js"
import { accountModel } from "./account.model.js"
import { accountWith } from "./account.with.js"


export * as accountModel from "./account.model.js"
export type * from "./account.type.js"

export const account = {
    model: accountModel,
    include: accountInclude,
    with: accountWith
}
