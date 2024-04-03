import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute } from "@tanstack/react-router"
import { appLayout } from "../app.layout"


export const configurationLayout = createRoute({
    getParentRoute: () => appLayout,
    path: '/configuration',
    pendingComponent: () => <CircularLoader />,
    component: () => <Outlet />
})
