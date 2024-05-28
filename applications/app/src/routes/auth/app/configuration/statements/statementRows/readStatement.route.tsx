import { createRoute } from "@tanstack/react-router"
import { ReadStatementPage } from "../../../../../../pages/auth/configuration/statements/statementRows/readStatementPage"
import { readStatementLayout } from "./readStatement.layout"


export const readStatementRoute = createRoute({
    getParentRoute: () => readStatementLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => <ReadStatementPage />
})
