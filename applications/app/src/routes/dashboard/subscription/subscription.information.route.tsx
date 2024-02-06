import { IconInfoSquareRounded } from "@tabler/icons-react"
import { createRoute } from "@tanstack/react-router"
import { SubscriptionPage } from "../../../pages/dashboard/subscriptions/subscriptionPage"
import { subscriptionLayout } from "./subscription.layout"


export const subscriptionInformationRoute = createRoute({
    getParentRoute: () => subscriptionLayout,
    beforeLoad: () => ({
        label: "Informations",
        icon: <IconInfoSquareRounded />,
        subNavigationParent: "/abonnement/informations"
    }),
    path: '/informations',
    component: () => <SubscriptionPage />
})
