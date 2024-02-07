import { userInclude } from "../user/user.include"


export const journalWith = {
    lastUpdatedByUser: {
        columns: userInclude
    },
    createdByUser: {
        columns: userInclude
    },
} as const
