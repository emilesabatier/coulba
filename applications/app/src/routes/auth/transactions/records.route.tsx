import { createRoute } from "@tanstack/react-router"
import { RecordsPage } from "../../../pages/auth/transactions/recordsPage"
import { transactionsLayout } from "./transactions.layout"


export const recordsRoute = createRoute({
    getParentRoute: () => transactionsLayout,
    beforeLoad: () => ({
        title: "Journal"
    }),
    path: '/journal',
    component: () => <RecordsPage />
})
