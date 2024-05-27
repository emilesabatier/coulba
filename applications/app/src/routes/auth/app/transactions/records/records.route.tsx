import { createRoute } from "@tanstack/react-router"
import { recordsLayout } from "./records.layout"
import { RecordsPage } from "../../../../../pages/auth/reports/recordsPage"


export const recordsRoute = createRoute({
    getParentRoute: () => recordsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => <RecordsPage />
})
