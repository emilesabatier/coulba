import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute } from "@tanstack/react-router"
import { authLayout } from "../auth.layout"


export const configurationLayout = createRoute({
    getParentRoute: () => authLayout,
    path: '/configuration',
    pendingComponent: () => <CircularLoader />,
    component: () => <Outlet />
})
