import { CircularLoader } from "@monassosportive/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { SubscriptionLayout } from "../../../pages/dashboard/subscriptions/subscriptionLayout"
import { dashboardLayout } from "../dashboard.layout"


export const subscriptionLayout = createRoute({
    getParentRoute: () => dashboardLayout,
    beforeLoad: () => ({
        label: "Abonnement",
        title: "Abonnement"
    }),
    path: '/abonnement',
    pendingComponent: () => <CircularLoader />,
    component: () => <SubscriptionLayout />
})
