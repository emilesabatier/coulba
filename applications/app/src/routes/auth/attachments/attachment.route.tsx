import { createRoute } from "@tanstack/react-router"
import { AttachmentPage } from "../../../pages/auth/attachments/attachmentPage"
import { attachmentsLayout } from "./attachments.layout"


export const attachmentRoute = createRoute({
    getParentRoute: () => attachmentsLayout,
    path: '/$idAttachment',
    component: () => <AttachmentPage />
})
