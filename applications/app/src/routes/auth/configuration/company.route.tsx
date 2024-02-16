import { createRoute } from "@tanstack/react-router"
import { CompanyPage } from "../../../pages/auth/configuration/companyPage"
import { configurationLayout } from "./configuration.layout"


export const companyRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Société"
    }),
    path: '/societe',
    component: () => <CompanyPage />
})
