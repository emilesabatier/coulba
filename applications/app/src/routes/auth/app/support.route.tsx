import { createRoute } from "@tanstack/react-router"
import { SupportPage } from "../../../pages/auth/supportPage"
import { appLayout } from "../app.layout"


export const supportRoute = createRoute({
    getParentRoute: () => appLayout,
    path: '/support',
    component: () => <SupportPage />
})
