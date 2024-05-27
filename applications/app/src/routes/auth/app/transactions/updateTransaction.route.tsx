import { createRoute } from "@tanstack/react-router"
import { UpdateTransactionPage } from "../../../../pages/auth/transactions/updateTransactionPage"
import { readTransactionLayout } from "./readTransaction.layout"


export const updateTransactionRoute = createRoute({
    getParentRoute: () => readTransactionLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: undefined
    }),
    path: '/modifier',
    component: () => <UpdateTransactionPage />
})
