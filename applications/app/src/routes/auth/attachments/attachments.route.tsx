import { createRoute } from "@tanstack/react-router"
import { AttachmentsPage } from "../../../pages/auth/attachments/attachmentsPage"
import { attachmentsLayout } from "./attachments.layout"


export const attachmentsRoute = createRoute({
    getParentRoute: () => attachmentsLayout,
    path: '/',
    component: () => <AttachmentsPage />
})
