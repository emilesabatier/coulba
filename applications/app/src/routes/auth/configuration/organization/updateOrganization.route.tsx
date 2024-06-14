import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../../components/layouts/main"
import { UpdateOrganizationForm } from "../../../../components/organization/updateOrganization/updateOrganization.form"
import { organizationLayout } from "./organization.layout"


export const updateOrganizationRoute = createRoute({
    getParentRoute: () => organizationLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de l'organisation."
    }),
    path: '/modifier',
    component: () => (
        <Main>
            <UpdateOrganizationForm />
        </Main>
    )
})
