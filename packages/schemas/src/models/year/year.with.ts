import { userInclude } from "../user/user.include"


export const yearWith = {
    lastUpdatedByUser: {
        columns: userInclude
    },
    createdByUser: {
        columns: userInclude
    },
} as const
