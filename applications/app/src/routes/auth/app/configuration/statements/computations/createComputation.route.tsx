import { createRoute } from "@tanstack/react-router"
import { CreateComputationPage } from "../../../../../../pages/auth/configuration/statements/computations/createComputationPage"
import { computationsLayout } from "./computations.layout"


export const createComputationRoute = createRoute({
    getParentRoute: () => computationsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter une opération dans le compte de résultat."
    }),
    path: '/ajouter',
    component: () => <CreateComputationPage />
})
