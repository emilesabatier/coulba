import { createRoute } from "@tanstack/react-router"
import { CreateYearPage } from "../../../../../pages/auth/configuration/years/createYearPage"
import { yearsLayout } from "./years.layout"


export const createYearRoute = createRoute({
    getParentRoute: () => yearsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un nouvel exercice."
    }),
    path: '/ajouter',
    component: () => <CreateYearPage />
})
