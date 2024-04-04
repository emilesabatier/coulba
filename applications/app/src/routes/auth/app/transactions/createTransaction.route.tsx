import { createRoute } from "@tanstack/react-router"
import { CreateTransactionPage } from "../../../../pages/auth/transactions/createTransactionPage"
import { transactionsLayout } from "./transactions.layout"


export const createTransactionRoute = createRoute({
    getParentRoute: () => transactionsLayout,
    path: '/ajouter',
    component: () => <CreateTransactionPage />
})
