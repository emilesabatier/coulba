import { createRoute } from "@tanstack/react-router"
import { statementsLayout } from "./statements.layout"
import { Main } from "../../../../../components/layouts/main"
import { CreateStatementForm } from "../../../../../components/statements/create/createStatement.form"


export const createStatementRoute = createRoute({
    getParentRoute: () => statementsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter une ligne dans le compte de résultat."
    }),
    path: '/ajouter',
    component: () => (
        <Main>
            <CreateStatementForm />
        </Main>
    )
})
