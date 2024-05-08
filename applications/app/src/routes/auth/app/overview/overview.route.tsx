import { createRoute } from "@tanstack/react-router"
import { OverviewPage } from "../../../../pages/auth/overview/overviewPage"
import { appLayout } from "../../app.layout"


export const overviewRoute = createRoute({
    getParentRoute: () => appLayout,
    beforeLoad: () => ({
        title: "Vue d'ensemble"
    }),
    path: '/',
    component: () => <OverviewPage />
})
