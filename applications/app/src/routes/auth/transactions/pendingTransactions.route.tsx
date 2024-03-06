import { createRoute } from "@tanstack/react-router"
import { PendingTransactionsPage } from "../../../pages/auth/transactions/pendingTransactionsPage"
import { transactionsLayout } from "./transactions.layout"


export const pendingTransactionsRoute = createRoute({
    getParentRoute: () => transactionsLayout,
    beforeLoad: () => ({
        title: "Enregistrements provisoires"
    }),
    path: '/enregistrements',
    component: () => <PendingTransactionsPage />
})
