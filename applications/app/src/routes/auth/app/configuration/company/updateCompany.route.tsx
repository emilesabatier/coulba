import { createRoute } from "@tanstack/react-router"
import { UpdateCompanyPage } from "../../../../../pages/auth/configuration/company/updateCompany"
import { companyLayout } from "./company.layout"


export const updateCompanyRoute = createRoute({
    getParentRoute: () => companyLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de la société."
    }),
    path: '/modifier',
    component: () => <UpdateCompanyPage />
})
