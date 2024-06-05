import { createRoute } from "@tanstack/react-router"
import { companyLayout } from "./company.layout"
import { UpdateCompanyForm } from "../../../../components/company/updateCompany/updateCompany.form"
import { Main } from "../../../../components/layouts/main"


export const updateCompanyRoute = createRoute({
    getParentRoute: () => companyLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de la société."
    }),
    path: '/modifier',
    component: () => (
        <Main>
            <UpdateCompanyForm />
        </Main>
    )
})
