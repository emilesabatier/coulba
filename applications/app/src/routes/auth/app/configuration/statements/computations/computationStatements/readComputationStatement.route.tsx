import { createRoute } from "@tanstack/react-router"
import { readComputationStatementLayout } from "./readComputationStatement.layout"
import { ComputationStatementContent } from "../../../../../../../components/computationStatements/read/computationStatementContent"
import { Main } from "../../../../../../../components/layouts/main"


export const readComputationStatementRoute = createRoute({
    getParentRoute: () => readComputationStatementLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => (
        <Main>
            <ComputationStatementContent />
        </Main>
    )
})
