import { userInclude } from "../user/user.include.js"


export const yearWith = {
    lastUpdatedByUser: {
        columns: userInclude
    },
    createdByUser: {
        columns: userInclude
    },
} as const
