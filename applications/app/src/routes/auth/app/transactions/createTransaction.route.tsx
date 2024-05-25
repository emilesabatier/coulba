import { createRoute } from "@tanstack/react-router"
import { CreateTransactionPage } from "../../../../pages/auth/transactions/createTransactionPage"
import { transactionsLayout } from "./transactions.layout"


export const createTransactionRoute = createRoute({
    getParentRoute: () => transactionsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un nouvel enregistrement comptable."
    }),
    path: '/ajouter',
    component: () => <CreateTransactionPage />
})
