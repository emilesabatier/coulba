import { createRoute } from "@tanstack/react-router"
import { CreateAttachmentPage } from "../../../../pages/auth/attachments/createAttachmentPage"
import { attachmentsLayout } from "./attachments.layout"


export const createAttachmentRoute = createRoute({
    getParentRoute: () => attachmentsLayout,
    path: '/ajouter',
    component: () => <CreateAttachmentPage />
})
