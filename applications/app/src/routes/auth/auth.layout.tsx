import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute, redirect } from "@tanstack/react-router"
import { rootLayout } from "../root.layout"


export const authLayout = createRoute({
    getParentRoute: () => rootLayout,
    id: 'authLayout',
    pendingComponent: () => <CircularLoader />,
    beforeLoad: async ({ context }) => {
        if (!context.session.isSignedIn) {
            throw redirect({
                to: '/connexion',
                search: {
                    // Use the current location to power a redirect after login
                    // (Do not use `router.state.resolvedLocation` as it can
                    // potentially lag behind the actual current location)
                    redirect: location.href,
                },
            })
        }
    },
    component: () => <Outlet />
})
