import { CircularLoader } from "@coulba/design/layouts"
import { createRoute, redirect } from "@tanstack/react-router"
import { AuthLayout } from "../../components/layouts/authLayout"
import { AuthProvider } from "../../contexts/authProvider"
import { rootLayout } from "../root.layout"


export const authLayout = createRoute({
    getParentRoute: () => rootLayout,
    id: 'authLayout',
    beforeLoad: async ({ context }) => {
        if (!context.session.isSignedIn) {
            throw redirect({ to: '/connexion' })
        }
    },
    pendingComponent: () => <CircularLoader />,
    component: () => (
        <AuthProvider>
            <AuthLayout />
        </AuthProvider>
    )
})
