import { resetPasswordBody, resetPasswordReturn } from "./resetPassword.js"
import { validateEmailBody, validateEmailReturn } from "./validateEmail.js"
import { validateInvitationBody, validateInvitationReturn } from "./validateInvitation.js"


export const users = {
    patch: {
        validateInvitation: {
            body: validateInvitationBody,
            return: validateInvitationReturn
        },
        validateEmail: {
            body: validateEmailBody,
            return: validateEmailReturn
        },
        resetPassword: {
            body: resetPasswordBody,
            return: resetPasswordReturn
        }
    }
}
