import { createRoute } from "@tanstack/react-router"
import { SubscriptionPage } from "../../../../pages/auth/configuration/subscriptionPage"
import { configurationLayout } from "./configuration.layout"


export const subscriptionRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Abonnement"
    }),
    path: '/abonnement',
    component: () => <SubscriptionPage />
})
