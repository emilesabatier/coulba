import { sendMessageBody, sendMessageReturn } from "./sendMessage"


export const contact = {
    patch: {
        sendMessage: {
            body: sendMessageBody,
            return: sendMessageReturn
        }
    }
}
