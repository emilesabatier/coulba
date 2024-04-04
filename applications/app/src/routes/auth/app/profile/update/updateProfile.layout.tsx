import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute } from "@tanstack/react-router"
import { profileLayout } from "../profile.layout"


export const updateProfileLayout = createRoute({
    getParentRoute: () => profileLayout,
    path: '/modifier',
    pendingComponent: () => <CircularLoader />,
    component: () => <Outlet />
})
