import { createRoute } from "@tanstack/react-router"
import { attachmentsLayout } from "./attachments.layout"
import { AttachmentsTable } from "../../../components/attachments/attachmentsTable"
import { Main } from "../../../components/layouts/main"


export const attachmentsRoute = createRoute({
    getParentRoute: () => attachmentsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous trouverez sur cette page la liste des pièces justificatives et autres fichiers."
    }),
    path: '/',
    component: () => (
        <Main>
            <AttachmentsTable />
        </Main>
    )
})
