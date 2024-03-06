import { createRoute } from "@tanstack/react-router"
import { BalancePage } from "../../../pages/auth/transactions/balancePage"
import { transactionsLayout } from "./transactions.layout"


export const balanceRoute = createRoute({
    getParentRoute: () => transactionsLayout,
    beforeLoad: () => ({
        title: "Balance"
    }),
    path: '/balance',
    component: () => <BalancePage />
})
