import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute } from "@tanstack/react-router"
import { authLayout } from "../auth.layout"


export const reportsLayout = createRoute({
    getParentRoute: () => authLayout,
    path: '/liasse',
    pendingComponent: () => <CircularLoader />,
    component: () => <Outlet />
})
