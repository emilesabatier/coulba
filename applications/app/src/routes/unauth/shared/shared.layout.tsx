import { Outlet, createRoute } from "@tanstack/react-router"
import { unauthLayout } from "../unauth.layout"


export const sharedLayout = createRoute({
    getParentRoute: () => unauthLayout,
    path: '/services',
    component: () => <Outlet />
})
