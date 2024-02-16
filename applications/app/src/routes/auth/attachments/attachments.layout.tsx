import { CircularLoader } from "@coulba/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { AttachmentsLayout } from "../../../pages/auth/attachments/attachmentsLayout"
import { authLayout } from "../auth.layout"


export const attachmentsLayout = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Pièces justificatives"
    }),
    path: '/pieces',
    pendingComponent: () => <CircularLoader />,
    component: () => <AttachmentsLayout />
})
