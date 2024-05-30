import { createRoute } from "@tanstack/react-router"
import { readAccountStatementLayout } from "./readAccountStatement.layout"
import { AccountStatementContent } from "../../../../../../../components/accountStatements/read/accountStatementContent"
import { Main } from "../../../../../../../components/layouts/main"


export const readAccountStatementRoute = createRoute({
    getParentRoute: () => readAccountStatementLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => (
        <Main>
            <AccountStatementContent />
        </Main>
    )
})
