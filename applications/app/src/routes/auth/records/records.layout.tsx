import { Outlet, createRoute } from "@tanstack/react-router"
import { authLayout } from "../auth.layout"


export const recordsLayout = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Écritures",
        description: undefined
    }),
    path: '/ecritures',
    component: () => <Outlet />
})
