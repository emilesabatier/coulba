import { createRoute } from "@tanstack/react-router"
import { CreateAttachmentPage } from "../../../../pages/auth/attachments/createAttachmentPage"
import { attachmentsLayout } from "./attachments.layout"


export const createAttachmentRoute = createRoute({
    getParentRoute: () => attachmentsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un nouveau fichier."
    }),
    path: '/ajouter',
    component: () => <CreateAttachmentPage />
})
