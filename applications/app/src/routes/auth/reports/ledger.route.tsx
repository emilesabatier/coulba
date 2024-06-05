import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main"
import { LedgerReport } from "../../../components/reports/ledgerReport"
import { reportsLayout } from "./reports.layout"


export const ledgerRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Grand livre",
        description: "Le grand livre présente les mêmes données que celle du journal mais agrégées par compte."
    }),
    path: '/grand-livre',
    component: () => (
        <Main>
            <LedgerReport />
        </Main>
    )
})
