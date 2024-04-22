import { createRoute } from "@tanstack/react-router"
import { ReadAttachmentPage } from "../../../../pages/auth/attachments/readAttachmentPage"
import { attachmentsLayout } from "./attachments.layout"


export const readAttachmentRoute = createRoute({
    getParentRoute: () => attachmentsLayout,
    path: '/$idAttachment',
    component: () => <ReadAttachmentPage />
})
