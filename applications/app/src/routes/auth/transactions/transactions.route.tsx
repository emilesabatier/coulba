import { createRoute } from "@tanstack/react-router"
import { TransactionsPage } from "../../../pages/auth/transactions/transactionsPage"
import { authLayout } from "../auth.layout"


export const transactionsRoute = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Enregistrements"
    }),
    path: '/enregistrements',
    component: () => <TransactionsPage />
})
