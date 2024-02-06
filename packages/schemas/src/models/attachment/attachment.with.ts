import { entryInclude } from "../entry/entry.include.js"
import { userInclude } from "../user/user.include.js"


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
