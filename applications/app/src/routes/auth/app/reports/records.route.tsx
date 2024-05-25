import { createRoute } from "@tanstack/react-router"
import { RecordsPage } from "../../../../pages/auth/reports/recordsPage"
import { reportsLayout } from "./reports.layout"


export const recordsRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Journal",
        description: "Le journal comptable contient toutes les entrées enregistrées et validées. Il représente toutes les opérations de votre société."
    }),
    path: '/journal',
    component: () => <RecordsPage />
})
