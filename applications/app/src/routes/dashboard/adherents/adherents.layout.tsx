import { CircularLoader } from "@monassosportive/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { AdherentIcon } from "../../../components/adherent/adherent.icon"
import { AdherentsLayout } from "../../../pages/dashboard/adherents/adherentsLayout"
import { dashboardLayout } from "../dashboard.layout"


export const adherentsLayout = createRoute({
    getParentRoute: () => dashboardLayout,
    beforeLoad: () => ({
        label: "Adhérents",
        icon: <AdherentIcon />,
        title: "Adhérents",
        subNavigationParent: "/adherents"
    }),
    path: '/adherents',
    pendingComponent: () => <CircularLoader />,
    component: () => <AdherentsLayout />
})
