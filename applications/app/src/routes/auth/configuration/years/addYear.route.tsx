import { createRoute } from "@tanstack/react-router"
import { yearsLayout } from "./years.layout"
import { AddYearPage } from "../../../../pages/auth/configuration/years/addYearPage"


export const addYearRoute = createRoute({
    getParentRoute: () => yearsLayout,
    path: '/ajouter',
    component: () => <AddYearPage />
})
