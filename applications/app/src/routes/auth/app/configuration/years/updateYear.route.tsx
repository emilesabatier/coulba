import { createRoute } from "@tanstack/react-router"
import { UpdateYearPage } from "../../../../../pages/auth/configuration/years/updateYearPage"
import { yearsLayout } from "./years.layout"


export const updateYearRoute = createRoute({
    getParentRoute: () => yearsLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de l'exercice."
    }),
    path: '/$idYear/modifier',
    component: () => <UpdateYearPage />
})
