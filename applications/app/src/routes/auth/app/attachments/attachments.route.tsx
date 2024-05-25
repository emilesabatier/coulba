import { createRoute } from "@tanstack/react-router"
import { AttachmentsPage } from "../../../../pages/auth/attachments/attachmentsPage"
import { attachmentsLayout } from "./attachments.layout"


export const attachmentsRoute = createRoute({
    getParentRoute: () => attachmentsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous trouverez sur cette page la liste des pièces justificatives et autres fichiers."
    }),
    path: '/',
    component: () => <AttachmentsPage />
})
