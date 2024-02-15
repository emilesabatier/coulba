import { createOneUserBody, createOneUserReturn } from "./createOneUser"
import { deleteOneUserParams, deleteOneUserReturn } from "./deleteOneUser"
import { readOneUserParams, readOneUserReturn } from "./readOneUser"
import { sendInvitationParams } from "./sendInvitation"
import { updateOneUserBody, updateOneUserParams, updateOneUserReturn } from "./updateOneUser"


export const users = {
    create: {
        body: createOneUserBody,
        return: createOneUserReturn
    },
    read: {
        params: readOneUserParams,
        return: readOneUserReturn
    },
    update: {
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
