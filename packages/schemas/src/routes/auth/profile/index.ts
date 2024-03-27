import { readProfileReturn } from "./readProfile"
import { sendValidationEmailReturn } from "./sendValidationEmail"
import { updateEmailBody, updateEmailReturn } from "./updateEmail"
import { updatePasswordBody, updatePasswordReturn } from "./updatePassword"
import { updateProfileBody, updateProfileReturn } from "./updateProfile"


export const profile = {
    get: {
        return: readProfileReturn
    },
    put: {
        body: updateProfileBody,
        return: updateProfileReturn
    },
    patch: {
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
        }
    }
}
