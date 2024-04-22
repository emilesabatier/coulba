import { createRoute } from "@tanstack/react-router"
import { UpdateCompanyPage } from "../../../../../pages/auth/configuration/company/updateCompany"
import { companyLayout } from "./company.layout"


export const updateCompanyRoute = createRoute({
    getParentRoute: () => companyLayout,
    path: '/modifier',
    component: () => <UpdateCompanyPage />
})
