import { createRoute } from "@tanstack/react-router"
import { yearsLayout } from "./years.layout"
import { YearsPage } from "../../../../pages/auth/configuration/years/yearsPage"


export const yearsRoute = createRoute({
    getParentRoute: () => yearsLayout,
    path: '/',
    component: () => <YearsPage />
})
