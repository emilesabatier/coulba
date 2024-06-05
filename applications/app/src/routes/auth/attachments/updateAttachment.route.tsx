import { createRoute } from "@tanstack/react-router"
import { UpdateAttachmentForm } from "../../../components/attachments/update/updateAttachment.form"
import { Main } from "../../../components/layouts/main"
import { readAttachmentLayout } from "./readAttachment.layout"


export const updateAttachmentRoute = createRoute({
    getParentRoute: () => readAttachmentLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données du fichier."
    }),
    path: '/modifier',
    component: () => (
        <Main>
            <UpdateAttachmentForm />
        </Main>
    )
})
