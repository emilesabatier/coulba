import { Navigate, createRoute } from "@tanstack/react-router"
import { transactionsLayout } from "./transactions.layout"


export const transactionsRoute = createRoute({
    getParentRoute: () => transactionsLayout,
    path: '/',
    component: () => <Navigate to="/livres/journal" />
})
