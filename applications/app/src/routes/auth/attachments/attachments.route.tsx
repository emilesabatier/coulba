import { createRoute } from "@tanstack/react-router"
import { AttachmentsTable } from "../../../components/attachments/attachmentsTable"
import { Main } from "../../../components/layouts/main"
import { attachmentsLayout } from "./attachments.layout"
import { Section } from "../../../components/layouts/section/section"


export const attachmentsRoute = createRoute({
    getParentRoute: () => attachmentsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous trouverez sur cette page la liste des pièces justificatives et autres fichiers."
    }),
    path: '/',
    component: () => (
        <Main>
            <Section.Root>
                <Section.Item>
                    <AttachmentsTable />
                </Section.Item>
            </Section.Root>
        </Main>
    )
})
