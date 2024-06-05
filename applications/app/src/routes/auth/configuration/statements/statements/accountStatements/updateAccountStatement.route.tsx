import { createRoute } from "@tanstack/react-router"
import { readAccountStatementLayout } from "./readAccountStatement.layout"
import { UpdateAccountStatementForm } from "../../../../../../components/accountStatements/update/updateAccountStatement.form"
import { Main } from "../../../../../../components/layouts/main"


export const updateAccountStatementRoute = createRoute({
    getParentRoute: () => readAccountStatementLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: undefined
    }),
    path: '/modifier',
    component: () => (
        <Main>
            <UpdateAccountStatementForm />
        </Main>
    )
})
