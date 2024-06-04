import { createRoute } from "@tanstack/react-router"
import { RowsPage } from "../../../../pages/auth/reports/rowsPage"
import { reportsLayout } from "./reports.layout"


export const rowsRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Livre-journal",
        description: "Le livre-journal est un document qui contient toutes les entrées enregistrées et validées. Il représente toutes les écritures de votre société."
    }),
    path: '/livre-journal',
    component: () => <RowsPage />
})
