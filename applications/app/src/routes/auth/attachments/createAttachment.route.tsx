import { createRoute } from "@tanstack/react-router"
import { attachmentsLayout } from "./attachments.layout"
import { CreateAttachmentPage } from "../../../pages/auth/attachments/createAttachmentPage"


export const createAttachmentRoute = createRoute({
    getParentRoute: () => attachmentsLayout,
    path: '/ajouter',
    component: () => <CreateAttachmentPage />
})
