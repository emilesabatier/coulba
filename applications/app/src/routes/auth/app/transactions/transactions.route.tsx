import { createRoute } from "@tanstack/react-router"
import { TransactionsPage } from "../../../../pages/auth/transactions/transactionsPage"
import { transactionsLayout } from "./transactions.layout"


export const transactionsRoute = createRoute({
    getParentRoute: () => transactionsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => <TransactionsPage />
})
