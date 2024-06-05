import { createRoute } from "@tanstack/react-router"
import { attachmentsLayout } from "./attachments.layout"
import { CreateAttachmentForm } from "../../../components/attachments/create/createAttachment.form"
import { Main } from "../../../components/layouts/main"


export const createAttachmentRoute = createRoute({
    getParentRoute: () => attachmentsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un nouveau fichier."
    }),
    path: '/ajouter',
    component: () => (
        <Main>
            <CreateAttachmentForm />
        </Main>
    )
})
