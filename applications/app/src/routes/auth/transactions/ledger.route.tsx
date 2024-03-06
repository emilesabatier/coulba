import { createRoute } from "@tanstack/react-router"
import { LedgerPage } from "../../../pages/auth/transactions/ledgerPage"
import { transactionsLayout } from "./transactions.layout"


export const ledgerRoute = createRoute({
    getParentRoute: () => transactionsLayout,
    beforeLoad: () => ({
        title: "Grand livre"
    }),
    path: '/grand-livre',
    component: () => <LedgerPage />
})
