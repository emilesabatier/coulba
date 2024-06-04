import { createRoute } from "@tanstack/react-router"
import { RecordsPage } from "../../../../pages/auth/records/recordsPage"
import { recordsLayout } from "./records.layout"


export const recordsRoute = createRoute({
    getParentRoute: () => recordsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => <RecordsPage />
})
