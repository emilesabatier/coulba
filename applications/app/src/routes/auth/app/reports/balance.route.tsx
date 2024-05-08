import { createRoute } from "@tanstack/react-router"
import { BalancePage } from "../../../../pages/auth/reports/balancePage"
import { reportsLayout } from "./reports.layout"


export const balanceRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Balance"
    }),
    path: '/balance',
    component: () => <BalancePage />
})
