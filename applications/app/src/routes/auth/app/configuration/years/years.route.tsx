import { createRoute } from "@tanstack/react-router"
import { YearsPage } from "../../../../../pages/auth/configuration/years/yearsPage"
import { yearsLayout } from "./years.layout"


export const yearsRoute = createRoute({
    getParentRoute: () => yearsLayout,
    path: '/',
    component: () => <YearsPage />
})
