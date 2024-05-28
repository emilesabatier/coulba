import { createRoute } from "@tanstack/react-router"
import { UpdateStatementPage } from "../../../../../../pages/auth/configuration/statements/statementRows/updateStatementPage"
import { readStatementLayout } from "./readStatement.layout"


export const updateStatementRoute = createRoute({
    getParentRoute: () => readStatementLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de la ligne du bilan."
    }),
    path: '/modifier',
    component: () => <UpdateStatementPage />
})
