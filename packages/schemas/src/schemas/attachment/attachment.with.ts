import { entryInclude } from "../entry/entry.include"
import { userInclude } from "../user/user.include"


export const attachmentWith = {
    entries: {
        columns: entryInclude
    },
    lastUpdatedByUser: {
        columns: userInclude
    },
    createdByUser: {
        columns: userInclude
    },
} as const
