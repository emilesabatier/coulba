import { createRoute } from "@tanstack/react-router"
import { CreateYearPage } from "../../../../../pages/auth/configuration/years/createYearPage"
import { yearsLayout } from "./years.layout"


export const createYearRoute = createRoute({
    getParentRoute: () => yearsLayout,
    path: '/ajouter',
    component: () => <CreateYearPage />
})
