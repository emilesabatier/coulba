import { CircularLoader } from "@monassosportive/design/layouts"
import { createRoute, redirect } from "@tanstack/react-router"
import { DashboardLayout } from "../../pages/dashboard/dashboardLayout"
import { rootLayout } from "../root.layout"


export const dashboardLayout = createRoute({
    getParentRoute: () => rootLayout,
    id: 'dashboardLayout',
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
    component: () => <DashboardLayout />
})
