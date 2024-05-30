import { Outlet, createRoute } from "@tanstack/react-router"
import { computationStatementsLayout } from "./computationStatements.layout"


export const readComputationStatementLayout = createRoute({
    getParentRoute: () => computationStatementsLayout,
    beforeLoad: ({ params }) => ({
        title: params.idComputationStatement,
        description: undefined
    }),
    path: '/$idComputationStatement',
    component: () => <Outlet />
})
