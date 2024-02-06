import { createRoute } from "@tanstack/react-router"
import { ConversationsPage } from "../../../../pages/dashboard/communication/chat/conversationsPage"
import { chatLayout } from "./chat.layout"


export const conversationsRoute = createRoute({
    getParentRoute: () => chatLayout,
    path: '/',
    component: () => <ConversationsPage />
})
