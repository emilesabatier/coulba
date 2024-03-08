import { createUserBody, createUserReturn } from "./createUser"
import { deleteUserParams, deleteUserReturn } from "./deleteUser"
import { readUserParams, readUserReturn } from "./readUser"
import { sendInvitationParams } from "./sendInvitation"
import { updateUserBody, updateUserParams, updateUserReturn } from "./updateUser"


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
    sendInvitation: {
        params: sendInvitationParams
    }
}
