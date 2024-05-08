import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute } from "@tanstack/react-router"
import { appLayout } from "../../app.layout"


export const reportsLayout = createRoute({
    getParentRoute: () => appLayout,
    path: '/documents',
    pendingComponent: () => <CircularLoader />,
    component: () => <Outlet />
})
