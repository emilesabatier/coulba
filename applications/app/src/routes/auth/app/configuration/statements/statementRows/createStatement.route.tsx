import { createRoute } from "@tanstack/react-router"
import { CreateStatementPage } from "../../../../../../pages/auth/configuration/statements/statementRows/createStatementPage"
import { statementRowsLayout } from "./statementRows.layout"


export const createStatementRoute = createRoute({
    getParentRoute: () => statementRowsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter une ligne dans le compte de résultat."
    }),
    path: '/ajouter',
    component: () => <CreateStatementPage />
})
