import { userInclude } from "../user/user.include"
import { accountInclude } from "./account.include"


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
