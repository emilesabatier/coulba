import { createRoute } from "@tanstack/react-router"
import { BalancePage } from "../../../../pages/auth/reports/balancePage"
import { reportsLayout } from "./reports.layout"


export const balanceRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Balance",
        description: "La balance comptable agrège le débit & crédit des opérations par compte et affiche le solde de chacun."
    }),
    path: '/balance',
    component: () => <BalancePage />
})
