import { Outlet, createRoute } from "@tanstack/react-router"
import { rootLayout } from "../root.layout"


export const sharedLayout = createRoute({
    getParentRoute: () => rootLayout,
    path: '/services',
    component: () => <Outlet />
})
