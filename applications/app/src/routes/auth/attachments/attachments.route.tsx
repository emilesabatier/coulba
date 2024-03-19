import { CircularLoader } from "@coulba/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { AttachmentsPage } from "../../../pages/auth/attachments/attachmentsPage"
import { authLayout } from "../auth.layout"


export const attachmentsRoute = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Stockage de fichiers"
    }),
    path: '/stockage',
    pendingComponent: () => <CircularLoader />,
    component: () => <AttachmentsPage />
})
