import { createRoute } from "@tanstack/react-router"
import { OverviewPage } from "../../../pages/auth/overview/overviewPage"
import { authLayout } from "../auth.layout"


export const overviewRoute = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Vue d'ensemble"
    }),
    path: '/',
    component: () => <OverviewPage />
})
