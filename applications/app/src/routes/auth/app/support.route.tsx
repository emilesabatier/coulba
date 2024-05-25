import { createRoute } from "@tanstack/react-router"
import { SupportPage } from "../../../pages/auth/supportPage"
import { appLayout } from "../app.layout"


export const supportRoute = createRoute({
    getParentRoute: () => appLayout,
    beforeLoad: () => ({
        title: "Support",
        description: "Vous trouverez sur cette page un formulaire afin de nous contacter rapidement."
    }),
    path: '/support',
    component: () => <SupportPage />
})
