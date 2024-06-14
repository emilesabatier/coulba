import { createRoute } from "@tanstack/react-router"
import { StatementReport } from "../../../components/reports/statement/statementReport"
import { reportsLayout } from "./reports.layout"
import { Main } from "../../../components/layouts/main"


export const statementRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Compte de résultat",
        description: "Le compte de résultat permet d'avoir une vue globale sur l'activité' de l'entreprise."
    }),
    path: '/compte-de-resultat',
    component: () => (
        <Main>
            <StatementReport />
        </Main>
    )
})
