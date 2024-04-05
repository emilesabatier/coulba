import { activateBody, activateReturn } from "./activate.js"
import { readProfileReturn } from "./readProfile.js"
import { sendSupportMessageBody, sendSupportMessageReturn } from "./sendSupportMessage.js"
import { sendValidationEmailReturn } from "./sendValidationEmail.js"
import { updateEmailBody, updateEmailReturn } from "./updateEmail.js"
import { updatePasswordBody, updatePasswordReturn } from "./updatePassword.js"
import { updateProfileBody, updateProfileReturn } from "./updateProfile.js"


export const profile = {
    get: {
        return: readProfileReturn
    },
    put: {
        body: updateProfileBody,
        return: updateProfileReturn
    },
    patch: {
        activate: {
            body: activateBody,
            return: activateReturn
        },
        updateEmail: {
            body: updateEmailBody,
            return: updateEmailReturn
        },
        updatePassword: {
            body: updatePasswordBody,
            return: updatePasswordReturn
        },
        sendValidationEmail: {
            return: sendValidationEmailReturn
        },
        sendSupportMessage: {
            body: sendSupportMessageBody,
            return: sendSupportMessageReturn
        }
    }
}
