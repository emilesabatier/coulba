import { createRoute } from "@tanstack/react-router"
import { VoucherIcon } from "../../../components/voucher/voucher.icon"
import { VouchersPage } from "../../../pages/dashboard/subscriptions/vouchersPage"
import { subscriptionLayout } from "./subscription.layout"


export const subscriptionVouchersRoute = createRoute({
    getParentRoute: () => subscriptionLayout,
    beforeLoad: () => ({
        label: "Bons de réduction",
        icon: <VoucherIcon />,
        subNavigationParent: "/abonnement/bons"
    }),
    path: '/bons',
    component: () => <VouchersPage />
})
