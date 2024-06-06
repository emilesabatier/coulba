import { Outlet, createRoute } from "@tanstack/react-router"
import { configurationLayout } from "../configuration.layout"


export const organizationLayout = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Organisation",
        description: undefined
    }),
    path: '/organisation',
    component: () => <Outlet />
})
