import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../../../components/layouts/main"
import { CreateStatementForm } from "../../../../../components/statements/create/createStatement.form"
import { statementsLayout } from "./statements.layout"


export const createStatementRoute = createRoute({
    getParentRoute: () => statementsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un poste de compte de résultat."
    }),
    path: '/ajouter',
    component: () => (
        <Main>
            <CreateStatementForm />
        </Main>
    )
})
