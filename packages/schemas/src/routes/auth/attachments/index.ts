import { createOneAttachmentBody, createOneAttachmentReturn } from "./createOneAttachment"
import { deleteOneAttachmentParams, deleteOneAttachmentReturn } from "./deleteOneAttachment"
import { readOneAttachmentParams, readOneAttachmentReturn } from "./readOneAttachment"
import { updateOneAttachmentBody, updateOneAttachmentParams, updateOneAttachmentReturn } from "./updateOneAttachment"


export const attachments = {
    create: {
        body: createOneAttachmentBody,
        return: createOneAttachmentReturn
    },
    read: {
        params: readOneAttachmentParams,
        return: readOneAttachmentReturn
    },
    update: {
        params: updateOneAttachmentParams,
        body: updateOneAttachmentBody,
        return: updateOneAttachmentReturn
    },
    delete: {
        params: deleteOneAttachmentParams,
        return: deleteOneAttachmentReturn
    }
}
