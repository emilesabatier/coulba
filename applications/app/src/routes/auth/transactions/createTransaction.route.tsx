import { createRoute } from "@tanstack/react-router"
import { transactionsLayout } from "./transactions.layout"
import { CreateTransactionPage } from "../../../pages/auth/transactions/createTransactionPage"


export const createTransactionRoute = createRoute({
    getParentRoute: () => transactionsLayout,
    path: '/ajouter',
    component: () => <CreateTransactionPage />
})
