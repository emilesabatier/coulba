import { createRoute } from "@tanstack/react-router"
import { AddAttachmentPage } from "../../../pages/auth/attachments/addAttachmentPage"
import { attachmentsLayout } from "./attachments.layout"


export const addAttachmentRoute = createRoute({
    getParentRoute: () => attachmentsLayout,
    path: '/ajouter',
    component: () => <AddAttachmentPage />
})
