import { createRoute } from "@tanstack/react-router"
import { CreateStatementPage } from "../../../../../../pages/auth/configuration/statements/statementRows/createStatementPage"
import { statementsLayout } from "../statements.layout"


export const createStatementRoute = createRoute({
    getParentRoute: () => statementsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter une ligne dans le compte de résultat."
    }),
    path: '/ajouter',
    component: () => <CreateStatementPage />
})
