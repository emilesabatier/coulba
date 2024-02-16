import { createRoute } from "@tanstack/react-router"
import { LedgerPage } from "../../../pages/auth/records/ledgerPage"
import { recordsLayout } from "./records.layout"


export const ledgerRoute = createRoute({
    getParentRoute: () => recordsLayout,
    beforeLoad: () => ({
        title: "Grand livre"
    }),
    path: '/grand-livre',
    component: () => <LedgerPage />
})
