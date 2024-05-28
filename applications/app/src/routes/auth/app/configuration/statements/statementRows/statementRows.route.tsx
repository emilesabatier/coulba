import { createRoute } from "@tanstack/react-router"
import { statementRowsLayout } from "./statementRows.layout"
import { StatementRowsPage } from "../../../../../../pages/auth/configuration/statements/statementRows/statementRowsPage"


export const statementRowsRoute = createRoute({
    getParentRoute: () => statementRowsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => <StatementRowsPage />
})
