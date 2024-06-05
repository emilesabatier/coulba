import { Outlet, createRoute } from "@tanstack/react-router"
import { statementsLayout } from "./statements.layout"


export const readStatementLayout = createRoute({
    getParentRoute: () => statementsLayout,
    beforeLoad: ({ params }) => ({
        title: params.idStatement,
        description: undefined
    }),
    path: '/$idStatement',
    component: () => <Outlet />
})
