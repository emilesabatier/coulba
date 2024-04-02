import { signInBody, signInReturn } from "./signIn"
import { signOutReturn } from "./signOut"


export const sessions = {
    patch: {
        signIn: {
            body: signInBody,
            return: signInReturn
        },
        signOut: {
            return: signOutReturn
        }
    }
}
