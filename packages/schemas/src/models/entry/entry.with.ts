import { accountInclude } from "../account/account.include.js"
import { attachmentInclude } from "../attachment/attachment.include.js"
import { journalInclude } from "../journal/journal.include.js"
import { userInclude } from "../user/user.include.js"


export const entryWith = {
    account: {
        columns: accountInclude
    },
    journal: {
        columns: journalInclude
    },
    attachment: {
        columns: attachmentInclude
    },
    lastUpdatedByUser: {
        columns: userInclude
    },
    createdByUser: {
        columns: userInclude
    },
} as const
