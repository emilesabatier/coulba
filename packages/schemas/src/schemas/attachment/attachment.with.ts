import { recordInclude } from "../record/record.include"
import { userInclude } from "../user/user.include"


export const attachmentWith = {
    records: {
        columns: recordInclude
    },
    lastUpdatedByUser: {
        columns: userInclude
    },
    createdByUser: {
        columns: userInclude
    },
} as const
