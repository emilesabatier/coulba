import { accountInclude } from "./account.include"
import { accountModel } from "./account.model"
import { accountWith } from "./account.with"


export * as accountModel from "./account.model"
export type * from "./account.type"

export const account = {
    model: accountModel,
    include: accountInclude,
    with: accountWith
}
