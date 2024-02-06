import { userInclude } from "../user/user.include.js"


export const companyWith = {
    lastUpdatedByUser: {
        columns: userInclude
    },
    createdByUser: {
        columns: userInclude
    },
} as const
