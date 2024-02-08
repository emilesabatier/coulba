import { userInclude } from "./user.include"
import { userWith } from "./user.with"
export type * from "./user.type"

export const user = {
    include: userInclude,
    with: userWith
}
