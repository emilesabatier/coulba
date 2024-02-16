import { createRoute } from "@tanstack/react-router"
import { ClosingPage } from "../../../pages/auth/reports/closingPage"
import { reportsLayout } from "./reports.layout"


export const closingRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Clôture"
    }),
    path: '/cloture',
    component: () => <ClosingPage />
})
