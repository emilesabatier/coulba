import { createRoute } from "@tanstack/react-router"
import { PaymentIcon } from "../../../components/payment/payment.icon"
import { PaymentsPage } from "../../../pages/dashboard/subscriptions/paymentsPage"
import { subscriptionLayout } from "./subscription.layout"


export const subscriptionPaymentsRoute = createRoute({
    getParentRoute: () => subscriptionLayout,
    beforeLoad: () => ({
        label: "Paiements",
        icon: <PaymentIcon />,
        subNavigationParent: "/abonnement/paiements"
    }),
    path: '/paiements',
    component: () => <PaymentsPage />
})
