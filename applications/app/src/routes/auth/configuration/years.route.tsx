import { createRoute } from "@tanstack/react-router"
import { YearsPage } from "../../../pages/auth/configuration/years/yearsPage"
import { configurationLayout } from "./configuration.layout"


export const yearsRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Exercices fiscaux"
    }),
    path: '/exercices',
    component: () => <YearsPage />
})
