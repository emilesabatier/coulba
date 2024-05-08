import { Outlet, createRoute } from "@tanstack/react-router"
import { configurationLayout } from "../configuration.layout"


export const accountsLayout = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Comptes"
    }),
    path: '/comptes',
    component: () => <Outlet />
})
