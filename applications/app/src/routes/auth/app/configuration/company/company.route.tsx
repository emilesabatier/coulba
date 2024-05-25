import { createRoute } from "@tanstack/react-router"
import { CompanyPage } from "../../../../../pages/auth/configuration/company/companyPage"
import { companyLayout } from "./company.layout"


export const companyRoute = createRoute({
    getParentRoute: () => companyLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page les informations sur votre société."
    }),
    path: '/',
    component: () => <CompanyPage />
})
