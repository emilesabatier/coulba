import { createAttachmentBody, createAttachmentReturn } from "./createAttachment"


export const attachments = {
    post: {
        body: createAttachmentBody,
        return: createAttachmentReturn
    }
}
