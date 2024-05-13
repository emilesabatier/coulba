import { createRoute } from "@tanstack/react-router"
import { computationsLayout } from "./computations.layout"
import { UpdateComputationPage } from "../../../../../../pages/auth/configuration/statements/computations/updateComputationPage"


export const updateComputationRoute = createRoute({
    getParentRoute: () => computationsLayout,
    path: '/$idComputation/modifier',
    component: () => <UpdateComputationPage />
})
