import { resetPasswordBody, resetPasswordReturn } from "./resetPassword"
import { validateEmailBody, validateEmailReturn } from "./validateEmail"
import { validateInvitationBody, validateInvitationReturn } from "./validateInvitation"


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
