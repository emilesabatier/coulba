import { createRoute } from "@tanstack/react-router"
import { OverviewIcon } from "../../../components/overview/overview.icon"
import { OverviewPage } from "../../../pages/dashboard/overview/overviewPage"
import { dashboardLayout } from "../dashboard.layout"


export const overviewRoute = createRoute({
    getParentRoute: () => dashboardLayout,
    beforeLoad: () => ({
        title: "Vue d'ensemble",
        label: "Vue d'ensemble",
        icon: <OverviewIcon />
    }),
    path: '/',
    component: () => <OverviewPage />
})
