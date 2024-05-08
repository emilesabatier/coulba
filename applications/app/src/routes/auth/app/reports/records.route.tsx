import { createRoute } from "@tanstack/react-router"
import { RecordsPage } from "../../../../pages/auth/reports/recordsPage"
import { reportsLayout } from "./reports.layout"


export const recordsRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Journal"
    }),
    path: '/journal',
    component: () => <RecordsPage />
})
