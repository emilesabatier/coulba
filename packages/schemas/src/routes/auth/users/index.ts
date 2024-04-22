import { createUserBody, createUserReturn } from "./createUser.js"
import { deleteUserParams, deleteUserReturn } from "./deleteUser.js"
import { readUserParams, readUserReturn } from "./readUser.js"
import { sendInvitationParams, sendInvitationReturn } from "./sendInvitation.js"
import { updateUserBody, updateUserParams, updateUserReturn } from "./updateUser.js"


export const users = {
    post: {
        body: createUserBody,
        return: createUserReturn
    },
    get: {
        params: readUserParams,
        return: readUserReturn
    },
    put: {
        params: updateUserParams,
        body: updateUserBody,
        return: updateUserReturn
    },
    delete: {
        params: deleteUserParams,
        return: deleteUserReturn
    },
    patch: {
        sendInvitation: {
            params: sendInvitationParams,
            return: sendInvitationReturn
        }
    }
}
