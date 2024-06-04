import { Outlet, createRoute } from "@tanstack/react-router"
import { appLayout } from "../../app.layout"


export const recordsLayout = createRoute({
    getParentRoute: () => appLayout,
    beforeLoad: () => ({
        title: "Écritures",
        description: undefined
    }),
    path: '/ecritures',
    component: () => <Outlet />
})
