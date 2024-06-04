import { createRoute } from "@tanstack/react-router"
import { RowsPage } from "../../../../../pages/auth/reports/rowsPage"
import { rowsLayout } from "./rows.layout"


export const rowsRoute = createRoute({
    getParentRoute: () => rowsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => <RowsPage />
})
