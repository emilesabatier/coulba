import { Outlet, createRoute } from "@tanstack/react-router"
import { accountStatementsLayout } from "./accountStatements.layout"


export const readAccountStatementLayout = createRoute({
    getParentRoute: () => accountStatementsLayout,
    beforeLoad: ({ params }) => ({
        title: params.idAccountStatement,
        description: undefined
    }),
    path: '/$idAccountStatement',
    component: () => <Outlet />
})
