import { sendMessageBody, sendMessageReturn } from "./sendMessage.js"


export const contact = {
    patch: {
        sendMessage: {
            body: sendMessageBody,
            return: sendMessageReturn
        }
    }
}
