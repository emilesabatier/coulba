import { createRoute } from "@tanstack/react-router"
import { UpdateComputationPage } from "../../../../../../pages/auth/configuration/statements/computations/updateComputationPage"
import { computationsLayout } from "./computations.layout"


export const updateComputationRoute = createRoute({
    getParentRoute: () => computationsLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de l'opération du bilan."
    }),
    path: '/$idComputation/modifier',
    component: () => <UpdateComputationPage />
})
