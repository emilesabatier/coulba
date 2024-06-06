import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../../components/layouts/main"
import { OrganizationContent } from "../../../../components/organization/organizationContent"
import { organizationLayout } from "./organization.layout"


export const organizationRoute = createRoute({
    getParentRoute: () => organizationLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page les informations sur votre organisation."
    }),
    path: '/',
    component: () => (
        <Main>
            <OrganizationContent />
        </Main>
    )
})
