import { accountInclude } from "./account.include"
import { accountWith } from "./account.with"
export type * from "./account.type"

export const account = {
    include: accountInclude,
    with: accountWith
}
