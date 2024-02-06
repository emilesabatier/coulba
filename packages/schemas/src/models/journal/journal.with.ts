import { userInclude } from "../user/user.include.js"


export const journalWith = {
    lastUpdatedByUser: {
        columns: userInclude
    },
    createdByUser: {
        columns: userInclude
    },
} as const
