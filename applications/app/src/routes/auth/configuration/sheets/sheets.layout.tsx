import { Outlet, createRoute } from "@tanstack/react-router"
import { configurationLayout } from "../configuration.layout"


export const sheetsLayout = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Bilan",
        description: undefined
    }),
    path: '/bilan',
    component: () => <Outlet />
})
