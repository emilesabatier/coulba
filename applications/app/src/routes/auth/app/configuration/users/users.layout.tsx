import { Outlet, createRoute } from "@tanstack/react-router"
import { configurationLayout } from "../configuration.layout"


export const usersLayout = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Utilisateurs"
    }),
    path: '/utilisateurs',
    component: () => <Outlet />
})
