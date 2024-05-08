import { createAttachmentBody, createAttachmentReturn } from "./createAttachment.js"
import { deleteAttachmentParams, deleteAttachmentReturn } from "./deleteAttachment.js"
import { readAttachmentParams, readAttachmentReturn } from "./readAttachment.js"
import { updateAttachmentBody, updateAttachmentParams, updateAttachmentReturn } from "./updateAttachment.js"


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
