import { createRoute } from "@tanstack/react-router"
import { OverviewPage } from "../../../../pages/auth/overview/overviewPage"
import { appLayout } from "../../app.layout"


export const overviewRoute = createRoute({
    getParentRoute: () => appLayout,
    beforeLoad: () => ({
        title: "Vue d'ensemble",
        description: "Pour rapidement voir ce qui concerne votre activité sur l'application"
    }),
    path: '/',
    component: () => <OverviewPage />
})
