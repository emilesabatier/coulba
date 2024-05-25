import { createRoute } from "@tanstack/react-router"
import { UpdateStatementPage } from "../../../../../pages/auth/configuration/statements/updateStatementPage"
import { statementsLayout } from "./statements.layout"


export const updateStatementRoute = createRoute({
    getParentRoute: () => statementsLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de la ligne du bilan."
    }),
    path: '/$idStatement/modifier',
    component: () => <UpdateStatementPage />
})
