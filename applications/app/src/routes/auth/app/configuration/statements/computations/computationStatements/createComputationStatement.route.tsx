import { createRoute } from "@tanstack/react-router"
import { computationStatementsLayout } from "./computationStatements.layout"
import { CreateComputationStatementForm } from "../../../../../../../components/computationStatements/create/createComputationStatement.form"
import { Main } from "../../../../../../../components/layouts/main"


export const createComputationStatementRoute = createRoute({
    getParentRoute: () => computationStatementsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: undefined
    }),
    path: '/ajouter',
    component: () => (
        <Main>
            <CreateComputationStatementForm />
        </Main>
    )
})
