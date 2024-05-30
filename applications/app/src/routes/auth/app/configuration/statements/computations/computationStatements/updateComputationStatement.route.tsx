import { createRoute } from "@tanstack/react-router"
import { readComputationStatementLayout } from "./readComputationStatement.layout"
import { UpdateComputationStatementForm } from "../../../../../../../components/computationStatements/update/updateComputationStatement.form"
import { Main } from "../../../../../../../components/layouts/main"


export const updateComputationStatementRoute = createRoute({
    getParentRoute: () => readComputationStatementLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: undefined
    }),
    path: '/modifier',
    component: () => (
        <Main>
            <UpdateComputationStatementForm />
        </Main>
    )
})
