import { accountInclude } from "./account.include"


export const accountWith = {
    accountParent: {
        columns: accountInclude
    }
} as const
