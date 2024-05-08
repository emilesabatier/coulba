import { createRoute } from "@tanstack/react-router"
import { UpdateAttachmentPage } from "../../../../pages/auth/attachments/updateAttachmentPage"
import { attachmentsLayout } from "./attachments.layout"


export const updateAttachmentRoute = createRoute({
    getParentRoute: () => attachmentsLayout,
    path: '/$idAttachment/modifier',
    component: () => <UpdateAttachmentPage />
})
