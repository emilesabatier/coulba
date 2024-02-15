import { resetPasswordBody } from "./resetPassword"
import { validateEmailBody } from "./validateEmail"


export const users = {
    validateEmail: {
        body: validateEmailBody
    },
    resetPassword: {
        body: resetPasswordBody
    }
}
