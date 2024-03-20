import { createRoute } from "@tanstack/react-router"
import { UpdateYearPage } from "../../../../pages/auth/configuration/years/updateYearPage"
import { yearsLayout } from "./years.layout"


export const updateYearRoute = createRoute({
    getParentRoute: () => yearsLayout,
    path: '/$idYear/modifier',
    component: () => <UpdateYearPage />
})
