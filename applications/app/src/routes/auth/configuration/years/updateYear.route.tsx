import { createRoute } from "@tanstack/react-router"
import { yearsLayout } from "./years.layout"
import { Main } from "../../../../components/layouts/main"
import { UpdateYearForm } from "../../../../components/years/update/updateYear.form"


export const updateYearRoute = createRoute({
    getParentRoute: () => yearsLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de l'exercice."
    }),
    path: '/$idYear/modifier',
    component: () => (
        <Main>
            <UpdateYearForm />
        </Main>
    )
})
