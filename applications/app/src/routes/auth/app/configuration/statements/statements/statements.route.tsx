import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../../../../components/layouts/main"
import { StatementsList } from "../../../../../../components/statements/statementsList"
import { statementsLayout } from "./statements.layout"


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
