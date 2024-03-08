import { createRoute } from "@tanstack/react-router"
import { ClosingPage } from "../../../pages/auth/configuration/closingPage"
import { configurationLayout } from "./configuration.layout"


export const closingRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Clôture"
    }),
    path: '/cloture',
    component: () => <ClosingPage />
})
