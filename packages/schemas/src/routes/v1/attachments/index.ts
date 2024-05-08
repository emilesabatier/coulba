import { createAttachmentBody, createAttachmentReturn } from "./createAttachment.js"


export const attachments = {
    post: {
        body: createAttachmentBody,
        return: createAttachmentReturn
    }
}
