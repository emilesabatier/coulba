import { createRoute } from "@tanstack/react-router"
import { BalancePage } from "../../../pages/auth/records/balancePage"
import { recordsLayout } from "./records.layout"


export const balanceRoute = createRoute({
    getParentRoute: () => recordsLayout,
    beforeLoad: () => ({
        title: "Balance"
    }),
    path: '/balance',
    component: () => <BalancePage />
})
