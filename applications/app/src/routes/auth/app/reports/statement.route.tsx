import { createRoute } from "@tanstack/react-router"
import { StatementPage } from "../../../../pages/auth/reports/statementPage"
import { reportsLayout } from "./reports.layout"


export const statementRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Compte de résultat",
        description: "Le compte de résultat permet d'avoir une vue globale sur l'activité' de l'entreprise."
    }),
    path: '/compte-de-resultat',
    component: () => <StatementPage />
})
