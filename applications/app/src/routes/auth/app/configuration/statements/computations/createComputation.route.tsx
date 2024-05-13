import { createRoute } from "@tanstack/react-router"
import { computationsLayout } from "./computations.layout"
import { CreateComputationPage } from "../../../../../../pages/auth/configuration/statements/computations/createComputationPage"


export const createComputationRoute = createRoute({
    getParentRoute: () => computationsLayout,
    path: '/ajouter',
    component: () => <CreateComputationPage />
})
