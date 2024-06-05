import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main"
import { BalanceReport } from "../../../components/reports/balanceReport"
import { reportsLayout } from "./reports.layout"


export const balanceRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Balance",
        description: "La balance comptable agrège le débit & crédit des écritures par compte et affiche le solde de chacun."
    }),
    path: '/balance',
    component: () => (
        <Main>
            <BalanceReport />
        </Main>
    )
})
