import { userInclude } from "./user.include"


export const userWith = {
    lastUpdatedByUser: {
        columns: userInclude
    },
    createdByUser: {
        columns: userInclude
    },
} as const
