import { createRoute } from "@tanstack/react-router"
import { ReadTransactionPage } from "../../../../pages/auth/transactions/readTransactionPage"
import { readTransactionLayout } from "./readTransaction.layout"


export const readTransactionRoute = createRoute({
    getParentRoute: () => readTransactionLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Consulter les données de l'enregistrement."
    }),
    path: '/',
    component: () => <ReadTransactionPage />
})
