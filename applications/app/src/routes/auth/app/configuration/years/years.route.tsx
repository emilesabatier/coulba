import { createRoute } from "@tanstack/react-router"
import { YearsPage } from "../../../../../pages/auth/configuration/years/yearsPage"
import { yearsLayout } from "./years.layout"


export const yearsRoute = createRoute({
    getParentRoute: () => yearsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page la liste des exercices fiscaux enregistrés pour l'entreprise."
    }),
    path: '/',
    component: () => <YearsPage />
})
