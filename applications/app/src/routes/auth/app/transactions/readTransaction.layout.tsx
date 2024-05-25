import { Outlet, createRoute } from "@tanstack/react-router"
import { transactionsLayout } from "./transactions.layout"


export const readTransactionLayout = createRoute({
    getParentRoute: () => transactionsLayout,
    beforeLoad: ({ params }) => ({
        title: params.idTransaction,
        description: undefined
    }),
    path: '/$idTransaction',
    component: () => <Outlet />
})
