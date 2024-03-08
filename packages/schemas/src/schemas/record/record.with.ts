import { accountInclude } from "../account/account.include"
import { attachmentInclude } from "../attachment/attachment.include"
import { journalInclude } from "../journal/journal.include"


export const recordWith = {
    account: {
        columns: accountInclude
    },
    journal: {
        columns: journalInclude
    },
    attachment: {
        columns: attachmentInclude
    }
} as const
