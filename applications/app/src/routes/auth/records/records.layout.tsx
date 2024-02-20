import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute } from "@tanstack/react-router"
import { authLayout } from "../auth.layout"


export const recordsLayout = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Livres"
    }),
    path: '/livres',
    pendingComponent: () => <CircularLoader />,
    component: () => <Outlet />
})
