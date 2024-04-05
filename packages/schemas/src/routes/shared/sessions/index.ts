import { signInBody, signInReturn } from "./signIn.js"
import { signOutReturn } from "./signOut.js"


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
