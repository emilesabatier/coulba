import { createRoute } from "@tanstack/react-router"
import { CreateAccountStatementPage } from "../../../../../../../pages/auth/configuration/statements/statementRows/accountStatements/createAccountStatementPage"
import { accountStatementsLayout } from "./accountStatements.layout"


export const createAccountStatementRoute = createRoute({
    getParentRoute: () => accountStatementsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: undefined
    }),
    path: '/ajouter',
    component: () => <CreateAccountStatementPage />
})
