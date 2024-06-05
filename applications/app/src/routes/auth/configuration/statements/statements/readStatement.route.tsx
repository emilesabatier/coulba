import { createRoute } from "@tanstack/react-router"
import { readStatementLayout } from "./readStatement.layout"
import { Main } from "../../../../../components/layouts/main"
import { StatementContent } from "../../../../../components/statements/read/statementContent"


export const readStatementRoute = createRoute({
    getParentRoute: () => readStatementLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => (
        <Main>
            <StatementContent />
        </Main>
    )
})
