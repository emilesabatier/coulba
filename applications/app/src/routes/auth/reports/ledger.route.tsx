import { createRoute } from "@tanstack/react-router"
import { LedgerPage } from "../../../pages/auth/reports/ledgerPage"
import { reportsLayout } from "./reports.layout"


export const ledgerRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Grand livre"
    }),
    path: '/grand-livre',
    component: () => <LedgerPage />
})
