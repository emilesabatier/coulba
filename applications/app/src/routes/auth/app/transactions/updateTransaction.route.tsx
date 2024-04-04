import { createRoute } from "@tanstack/react-router"
import { UpdateTransactionPage } from "../../../../pages/auth/transactions/updateTransactionPage"
import { transactionsLayout } from "./transactions.layout"


export const updateTransactionRoute = createRoute({
    getParentRoute: () => transactionsLayout,
    path: '/$idTransaction/modifier',
    component: () => <UpdateTransactionPage />
})
