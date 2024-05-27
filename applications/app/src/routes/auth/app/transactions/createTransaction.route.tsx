import { createRoute } from "@tanstack/react-router"
import { CreateTransactionPage } from "../../../../pages/auth/transactions/createTransactionPage"
import { transactionsLayout } from "./transactions.layout"


export const createTransactionRoute = createRoute({
    getParentRoute: () => transactionsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: undefined
    }),
    path: '/ajouter',
    component: () => <CreateTransactionPage />
})
