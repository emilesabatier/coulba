import { CircularLoader } from "@monassosportive/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { AccountIcon } from "../../../components/account/account.icon"
import { AccountsLayout } from "../../../pages/dashboard/accounts/accountsLayout"
import { dashboardLayout } from "../dashboard.layout"


export const accountsLayout = createRoute({
    getParentRoute: () => dashboardLayout,
    beforeLoad: () => ({
        label: "Comptes",
        icon: <AccountIcon />,
        title: "Comptes",
        subNavigationParent: "/comptes"
    }),
    path: '/comptes',
    pendingComponent: () => <CircularLoader />,
    component: () => <AccountsLayout />
})
