import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute, redirect } from "@tanstack/react-router"
import { rootLayout } from "../root.layout"


export const signInLayout = createRoute({
    getParentRoute: () => rootLayout,
    path: '/connexion',
    pendingComponent: () => <CircularLoader />,
    beforeLoad: async ({ context }) => {
        if (context.session && context.session.isSignedIn) {
            throw redirect({
                to: '/'
            })
        }
    },
    component: () => <Outlet />
})
