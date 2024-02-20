import { createRoute } from "@tanstack/react-router"
import { StatementPage } from "../../../pages/auth/declaration/statementPage"
import { reportsLayout } from "./reports.layout"


export const statementRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Compte de résultat"
    }),
    path: '/compte-de-resultat',
    component: () => <StatementPage />
})
