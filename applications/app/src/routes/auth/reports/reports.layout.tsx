import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute } from "@tanstack/react-router"
import { authLayout } from "../auth.layout"


export const reportsLayout = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Documents",
        description: undefined
    }),
    path: '/documents',
    pendingComponent: () => <CircularLoader />,
    component: () => <Outlet />
})
