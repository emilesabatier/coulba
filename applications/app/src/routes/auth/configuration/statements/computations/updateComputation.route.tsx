import { createRoute } from "@tanstack/react-router"
import { readComputationLayout } from "./readComputation.layout"
import { UpdateComputationForm } from "../../../../../components/computations/update/updateComputation.form"
import { Main } from "../../../../../components/layouts/main"


export const updateComputationRoute = createRoute({
    getParentRoute: () => readComputationLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de l'écriture du bilan."
    }),
    path: '/modifier',
    component: () => (
        <Main>
            <UpdateComputationForm />
        </Main>
    )
})
