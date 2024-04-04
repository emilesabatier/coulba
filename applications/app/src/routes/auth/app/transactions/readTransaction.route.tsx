import { createRoute } from "@tanstack/react-router"
import { ReadTransactionPage } from "../../../../pages/auth/transactions/readTransactionPage"
import { transactionsLayout } from "./transactions.layout"


export const readTransactionRoute = createRoute({
    getParentRoute: () => transactionsLayout,
    path: '/$idTransaction',
    component: () => <ReadTransactionPage />
})
