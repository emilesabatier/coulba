import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute } from "@tanstack/react-router"
import { authLayout } from "../auth.layout"


export const profileLayout = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Profil",
        description: undefined
    }),
    path: '/profil',
    pendingComponent: () => <CircularLoader />,
    component: () => <Outlet />
})
