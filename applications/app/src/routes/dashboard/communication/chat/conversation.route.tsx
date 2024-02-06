import { createRoute } from "@tanstack/react-router"
import { ConversationPage } from "../../../../pages/dashboard/communication/chat/conversationPage"
import { chatLayout } from "./chat.layout"


export const conversationRoute = createRoute({
    getParentRoute: () => chatLayout,
    path: '/$idConversation',
    component: () => <ConversationPage />
})
