import { createRoute } from "@tanstack/react-router"
import { readAccountStatementLayout } from "./readAccountStatement.layout"
import { ReadAccountStatementPage } from "../../../../../../../pages/auth/configuration/statements/statementRows/accountStatements/readAccountStatementPage"


export const readAccountStatementRoute = createRoute({
    getParentRoute: () => readAccountStatementLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => <ReadAccountStatementPage />
})
