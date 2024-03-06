import { createOneUserBody, createOneUserReturn } from "./createOneUser"
import { deleteOneUserParams, deleteOneUserReturn } from "./deleteOneUser"
import { readOneUserParams, readOneUserReturn } from "./readOneUser"
import { sendInvitationParams } from "./sendInvitation"
import { updateOneUserBody, updateOneUserParams, updateOneUserReturn } from "./updateOneUser"


export const users = {
    post: {
        body: createOneUserBody,
        return: createOneUserReturn
    },
    get: {
        params: readOneUserParams,
        return: readOneUserReturn
    },
    put: {
        params: updateOneUserParams,
        body: updateOneUserBody,
        return: updateOneUserReturn
    },
    delete: {
        params: deleteOneUserParams,
        return: deleteOneUserReturn
    },
    sendInvitation: {
        params: sendInvitationParams
    }
}
