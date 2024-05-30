import { createRoute } from "@tanstack/react-router"
import { readStatementLayout } from "./readStatement.layout"
import { Main } from "../../../../../../components/layouts/main"
import { UpdateStatementForm } from "../../../../../../components/statements/update/updateStatement.form"


export const updateStatementRoute = createRoute({
    getParentRoute: () => readStatementLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de la ligne du bilan."
    }),
    path: '/modifier',
    component: () => (
        <Main>
            <UpdateStatementForm />
        </Main>
    )
})
