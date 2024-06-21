import { activateBody, activateReturn } from "./activate.js"
import { readProfileReturn } from "./readProfile.js"
import { sendEmailValidationReturn } from "./sendEmailValidation.js"
import { sendSupportMessageBody, sendSupportMessageReturn } from "./sendSupportMessage.js"
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
        sendEmailValidation: {
            return: sendEmailValidationReturn
        },
        sendSupportMessage: {
            body: sendSupportMessageBody,
            return: sendSupportMessageReturn
        }
    }
}
