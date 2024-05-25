import { createRoute } from "@tanstack/react-router"
import { LedgerPage } from "../../../../pages/auth/reports/ledgerPage"
import { reportsLayout } from "./reports.layout"


export const ledgerRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Grand livre",
        description: "Le grand livre présente les mêmes données que celle du journal mais agrégées par compte."
    }),
    path: '/grand-livre',
    component: () => <LedgerPage />
})
