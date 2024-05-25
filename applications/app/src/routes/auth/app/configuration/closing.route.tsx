import { createRoute } from "@tanstack/react-router"
import { ClosingPage } from "../../../../pages/auth/configuration/closingPage"
import { configurationLayout } from "./configuration.layout"


export const closingRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Clôture",
        description: "Vous pouvez sur cette page clôturer l'exercice fiscal en cours et générer la version finale des documents comptables."
    }),
    path: '/cloture',
    component: () => <ClosingPage />
})
