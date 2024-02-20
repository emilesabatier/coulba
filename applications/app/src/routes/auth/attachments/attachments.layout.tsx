import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute } from "@tanstack/react-router"
import { authLayout } from "../auth.layout"


export const attachmentsLayout = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Pièces justificatives"
    }),
    path: '/pieces',
    pendingComponent: () => <CircularLoader />,
    component: () => <Outlet />
})
