import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute, redirect } from "@tanstack/react-router"
import { unauthLayout } from "../unauth.layout"


export const signInLayout = createRoute({
    getParentRoute: () => unauthLayout,
    path: '/connexion',
    pendingComponent: () => <CircularLoader />,
    beforeLoad: async ({ context }) => {
        if (context.session.isSignedIn) {
            throw redirect({ to: "/" })
        }
    },
    component: () => <Outlet />
})
