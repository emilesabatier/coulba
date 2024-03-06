import { createOneAttachmentBody, createOneAttachmentReturn } from "./createOneAttachment"
import { deleteOneAttachmentParams, deleteOneAttachmentReturn } from "./deleteOneAttachment"
import { readOneAttachmentParams, readOneAttachmentReturn } from "./readOneAttachment"
import { updateOneAttachmentBody, updateOneAttachmentParams, updateOneAttachmentReturn } from "./updateOneAttachment"


export const attachments = {
    post: {
        body: createOneAttachmentBody,
        return: createOneAttachmentReturn
    },
    get: {
        params: readOneAttachmentParams,
        return: readOneAttachmentReturn
    },
    put: {
        params: updateOneAttachmentParams,
        body: updateOneAttachmentBody,
        return: updateOneAttachmentReturn
    },
    delete: {
        params: deleteOneAttachmentParams,
        return: deleteOneAttachmentReturn
    }
}
