import { createRoute } from "@tanstack/react-router"
import { accountStatementsLayout } from "./accountStatements.layout"
import { CreateAccountStatementForm } from "../../../../../../../components/accountStatements/create/createAccountStatement.form"
import { Main } from "../../../../../../../components/layouts/main"


export const createAccountStatementRoute = createRoute({
    getParentRoute: () => accountStatementsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: undefined
    }),
    path: '/ajouter',
    component: () => (
        <Main>
            <CreateAccountStatementForm />
        </Main>
    )
})
