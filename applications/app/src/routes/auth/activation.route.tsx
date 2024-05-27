import { createRoute } from "@tanstack/react-router"
import { ActivationPage } from "../../pages/auth/activationPage"
import { authLayout } from "./auth.layout"


export const activationRoute = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/activation',
    component: () => <ActivationPage />
})
