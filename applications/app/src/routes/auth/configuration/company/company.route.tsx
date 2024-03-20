import { createRoute } from "@tanstack/react-router"
import { CompanyPage } from "../../../../pages/auth/configuration/company/companyPage"
import { companyLayout } from "./company.layout"


export const companyRoute = createRoute({
    getParentRoute: () => companyLayout,
    path: '/',
    component: () => <CompanyPage />
})
