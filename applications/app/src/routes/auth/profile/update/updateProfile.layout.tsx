import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute } from "@tanstack/react-router"
import { profileLayout } from "../profile.layout"


export const updateProfileLayout = createRoute({
    getParentRoute: () => profileLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: undefined
    }),
    path: '/modifier',
    pendingComponent: () => <CircularLoader />,
    component: () => <Outlet />
})
