import { CircularLoader } from "@coulba/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { AppLayout } from "../../pages/auth/appLayout"
import { authLayout } from "./auth.layout"


export const appLayout = createRoute({
    getParentRoute: () => authLayout,
    id: 'appLayout',
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    pendingComponent: () => <CircularLoader />,
    component: () => <AppLayout />
})
