import { userInclude } from "../user/user.include.js"
import { accountInclude } from "./account.include.js"


export const accountWith = {
    accountParent: {
        columns: accountInclude
    },
    lastUpdatedByUser: {
        columns: userInclude
    },
    createdByUser: {
        columns: userInclude
    },
} as const
