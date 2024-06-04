import { createRoute } from "@tanstack/react-router"
import { UpdateComputationPage } from "../../../../../../pages/auth/configuration/statements/computations/updateComputationPage"
import { readComputationLayout } from "./readComputation.layout"


export const updateComputationRoute = createRoute({
    getParentRoute: () => readComputationLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de l'écriture du bilan."
    }),
    path: '/modifier',
    component: () => <UpdateComputationPage />
})
