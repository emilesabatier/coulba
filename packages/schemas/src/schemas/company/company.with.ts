import { userInclude } from "../user/user.include"


export const companyWith = {
    lastUpdatedByUser: {
        columns: userInclude
    },
    createdByUser: {
        columns: userInclude
    },
} as const
