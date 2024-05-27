import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute, redirect } from "@tanstack/react-router"
import { AuthProvider } from "../../contexts/authProvider"
import { rootLayout } from "../root.layout"


export const authLayout = createRoute({
    getParentRoute: () => rootLayout,
    id: 'authLayout',
    beforeLoad: async ({ context }) => {
        if (!context.session.isSignedIn) {
            throw redirect({ to: '/connexion' })
        }
        return ({
            title: undefined,
            description: undefined
        })
    },
    pendingComponent: () => <CircularLoader />,
    component: () => (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    )
})
