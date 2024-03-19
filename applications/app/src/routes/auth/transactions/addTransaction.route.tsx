import { createRoute } from "@tanstack/react-router"
import { AddTransactionPage } from "../../../pages/auth/transactions/addTransactionPage"
import { transactionsLayout } from "./transactions.layout"


export const addTransactionRoute = createRoute({
    getParentRoute: () => transactionsLayout,
    path: '/ajouter',
    component: () => <AddTransactionPage />
})
