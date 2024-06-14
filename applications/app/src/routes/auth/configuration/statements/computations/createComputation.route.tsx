import { createRoute } from "@tanstack/react-router"
import { computationsLayout } from "./computations.layout"
import { CreateComputationForm } from "../../../../../components/computations/create/createComputation.form"
import { Main } from "../../../../../components/layouts/main"


export const createComputationRoute = createRoute({
    getParentRoute: () => computationsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter une écriture dans le compte de résultat."
    }),
    path: '/ajouter',
    component: () => (
        <Main>
            <CreateComputationForm />
        </Main>
    )
})
