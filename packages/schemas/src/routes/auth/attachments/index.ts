import { createAttachmentBody, createAttachmentReturn } from "./createAttachment"
import { deleteAttachmentParams, deleteAttachmentReturn } from "./deleteAttachment"
import { readAttachmentParams, readAttachmentReturn } from "./readAttachment"
import { updateAttachmentBody, updateAttachmentParams, updateAttachmentReturn } from "./updateAttachment"


export const attachments = {
    post: {
        body: createAttachmentBody,
        return: createAttachmentReturn
    },
    get: {
        params: readAttachmentParams,
        return: readAttachmentReturn
    },
    put: {
        params: updateAttachmentParams,
        body: updateAttachmentBody,
        return: updateAttachmentReturn
    },
    delete: {
        params: deleteAttachmentParams,
        return: deleteAttachmentReturn
    }
}
