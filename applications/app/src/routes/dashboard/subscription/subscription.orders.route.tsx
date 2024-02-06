import { createRoute } from "@tanstack/react-router"
import { OrderIcon } from "../../../components/order/order.icon"
import { OrdersPage } from "../../../pages/dashboard/subscriptions/ordersPage"
import { subscriptionLayout } from "./subscription.layout"


export const subscriptionOrdersRoute = createRoute({
    getParentRoute: () => subscriptionLayout,
    beforeLoad: () => ({
        label: "Commandes",
        icon: <OrderIcon />,
        subNavigationParent: "/abonnement/commandes"
    }),
    path: '/commandes',
    component: () => <OrdersPage />
})
