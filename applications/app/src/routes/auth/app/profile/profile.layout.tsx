import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute } from "@tanstack/react-router"
import { appLayout } from "../../app.layout"


export const profileLayout = createRoute({
    getParentRoute: () => appLayout,
    beforeLoad: () => ({
        title: "Profil",
        description: undefined
    }),
    path: '/profil',
    pendingComponent: () => <CircularLoader />,
    component: () => <Outlet />
})
