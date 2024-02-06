import { Navigate, createRoute } from "@tanstack/react-router"
import { subscriptionLayout } from "./subscription.layout"


export const subscriptionRoute = createRoute({
    getParentRoute: () => subscriptionLayout,
    path: '/',
    component: () => <Navigate to="/abonnement/informations" />
})
