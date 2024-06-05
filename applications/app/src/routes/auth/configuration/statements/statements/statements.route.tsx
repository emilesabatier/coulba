import { createRoute } from "@tanstack/react-router"
import { statementsLayout } from "./statements.layout"
import { Main } from "../../../../../components/layouts/main"
import { StatementsList } from "../../../../../components/statements/statementsList"


export const statementsRoute = createRoute({
    getParentRoute: () => statementsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => (
        <Main>
            <StatementsList />
        </Main>
    )
})
