import { createRoute } from "@tanstack/react-router"
import { UpdateAttachmentPage } from "../../../../pages/auth/attachments/updateAttachmentPage"
import { readAttachmentLayout } from "./readAttachment.layout"


export const updateAttachmentRoute = createRoute({
    getParentRoute: () => readAttachmentLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données du fichier."
    }),
    path: '/modifier',
    component: () => <UpdateAttachmentPage />
})
