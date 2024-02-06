import { CircularLoader } from "@monassosportive/design/layouts"
import { Outlet, createRoute } from "@tanstack/react-router"
import { ConversationIcon } from "../../../../components/conversation/conversation.icon"
import { communicationLayout } from "../communication.layout"


export const chatLayout = createRoute({
    getParentRoute: () => communicationLayout,
    beforeLoad: () => ({
        label: "Messagerie",
        icon: <ConversationIcon />,
        subNavigationParent: "/communication/messagerie"
    }),
    path: "/messagerie",
    pendingComponent: () => <CircularLoader />,
    component: () => <Outlet />
})
