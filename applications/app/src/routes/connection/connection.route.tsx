import { CircularLoader } from "@coulba/design/layouts"
import { createRoute, redirect } from "@tanstack/react-router"
import { ConnectionPage } from "../../pages/connection/connectionPage"
import { rootLayout } from "../root.layout"


export const connectionRoute = createRoute({
    getParentRoute: () => rootLayout,
    path: '/connexion',
    pendingComponent: () => <CircularLoader />,
    beforeLoad: async ({ context }) => {
        if (context.session.isSignedIn) {
            throw redirect({
                to: '/'
            })
        }
    },
    component: () => <ConnectionPage />
})
