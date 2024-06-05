import { createRoute } from "@tanstack/react-router"
import { companyLayout } from "./company.layout"
import { CompanyContent } from "../../../../components/company/companyContent"
import { Main } from "../../../../components/layouts/main"


export const companyRoute = createRoute({
    getParentRoute: () => companyLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page les informations sur votre société."
    }),
    path: '/',
    component: () => (
        <Main>
            <CompanyContent />
        </Main>
    )
})
