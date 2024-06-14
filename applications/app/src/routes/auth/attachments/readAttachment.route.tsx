import { createRoute } from "@tanstack/react-router"
import { readAttachmentLayout } from "./readAttachment.layout"
import { AttachmentContent } from "../../../components/attachments/read/attachmentContent"
import { Main } from "../../../components/layouts/main"


export const readAttachmentRoute = createRoute({
    getParentRoute: () => readAttachmentLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Consulter les données du fichier."
    }),
    path: '/',
    component: () => (
        <Main>
            <AttachmentContent />
        </Main>
    )
})
