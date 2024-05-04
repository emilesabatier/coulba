import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute, redirect } from "@tanstack/react-router"
import { rootLayout } from "../root.layout"


export const authLayout = createRoute({
    getParentRoute: () => rootLayout,
    id: 'authLayout',
    pendingComponent: () => <CircularLoader />,
    beforeLoad: async ({ context }) => {
        if (!context.session.isSignedIn) {
            throw redirect({ to: '/connexion' })
        }
    },
    component: () => <Outlet />
})
