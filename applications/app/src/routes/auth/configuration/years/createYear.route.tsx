import { createRoute } from "@tanstack/react-router"
import { yearsLayout } from "./years.layout"
import { CreateYearPage } from "../../../../pages/auth/configuration/years/createYearPage"


export const createYearRoute = createRoute({
    getParentRoute: () => yearsLayout,
    path: '/ajouter',
    component: () => <CreateYearPage />
})
