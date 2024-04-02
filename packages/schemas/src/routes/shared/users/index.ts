import { resetPasswordBody, resetPasswordReturn } from "./resetPassword"
import { validateEmailBody, validateEmailReturn } from "./validateEmail"


export const users = {
    patch: {
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
