import { Outlet, createRoute } from "@tanstack/react-router"
import { statementsLayout } from "../statements.layout"


export const statementRowsLayout = createRoute({
    getParentRoute: () => statementsLayout,
    beforeLoad: () => ({
        title: "Lignes",
        description: undefined
    }),
    path: '/lignes',
    component: () => <Outlet />
})
