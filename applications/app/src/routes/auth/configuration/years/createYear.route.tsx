import { createRoute } from "@tanstack/react-router"
import { yearsLayout } from "./years.layout"
import { Main } from "../../../../components/layouts/main"
import { CreateYearForm } from "../../../../components/years/create/createYear.form"


export const createYearRoute = createRoute({
    getParentRoute: () => yearsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un nouvel exercice."
    }),
    path: '/ajouter',
    component: () => (
        <Main>
            <CreateYearForm />
        </Main>
    )
})
