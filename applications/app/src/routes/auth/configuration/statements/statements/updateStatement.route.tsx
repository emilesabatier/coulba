import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../../../components/layouts/main"
import { UpdateStatementForm } from "../../../../../components/statements/update/updateStatement.form"
import { readStatementLayout } from "./readStatement.layout"


export const updateStatementRoute = createRoute({
    getParentRoute: () => readStatementLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données du poste de compte de résultat."
    }),
    path: '/modifier',
    component: () => (
        <Main>
            <UpdateStatementForm />
        </Main>
    )
})
