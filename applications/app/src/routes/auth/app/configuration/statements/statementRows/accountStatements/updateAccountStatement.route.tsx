import { createRoute } from "@tanstack/react-router"
import { UpdateAccountStatementPage } from "../../../../../../../pages/auth/configuration/statements/statementRows/accountStatements/updateAccountStatementPage"
import { readAccountStatementLayout } from "./readAccountStatement.layout"


export const updateAccountStatementRoute = createRoute({
    getParentRoute: () => readAccountStatementLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: undefined
    }),
    path: '/modifier',
    component: () => <UpdateAccountStatementPage />
})
