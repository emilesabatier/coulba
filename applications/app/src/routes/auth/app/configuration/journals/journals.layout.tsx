import { Outlet, createRoute } from "@tanstack/react-router"
import { configurationLayout } from "../configuration.layout"


export const journalsLayout = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Journaux",
        description: undefined
    }),
    path: '/journaux',
    component: () => <Outlet />
})
