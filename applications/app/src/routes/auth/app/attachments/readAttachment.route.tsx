import { createRoute } from "@tanstack/react-router"
import { ReadAttachmentPage } from "../../../../pages/auth/attachments/readAttachmentPage"
import { readAttachmentLayout } from "./readAttachment.layout"


export const readAttachmentRoute = createRoute({
    getParentRoute: () => readAttachmentLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Consulter les données du fichier."
    }),
    path: '/',
    component: () => <ReadAttachmentPage />
})
