import { Outlet, createRoute } from "@tanstack/react-router"
import { readStatementLayout } from "../readStatement.layout"


export const accountStatementsLayout = createRoute({
    getParentRoute: () => readStatementLayout,
    beforeLoad: () => ({
        title: "Comptes",
        description: undefined
    }),
    path: '/comptes',
    component: () => <Outlet />
})
