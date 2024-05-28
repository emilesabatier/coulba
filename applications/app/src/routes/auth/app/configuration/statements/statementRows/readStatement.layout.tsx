import { Outlet, createRoute } from "@tanstack/react-router"
import { statementRowsLayout } from "./statementRows.layout"


export const readStatementLayout = createRoute({
    getParentRoute: () => statementRowsLayout,
    beforeLoad: ({ params }) => ({
        title: params.idStatement,
        description: undefined
    }),
    path: '/$idStatement',
    component: () => <Outlet />
})
