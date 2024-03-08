import { createRoute } from "@tanstack/react-router"
import { YearsPage } from "../../../pages/auth/configuration/yearsPage"
import { configurationLayout } from "./configuration.layout"


export const yearsRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Exercices fiscaux"
    }),
    path: '/exercices',
    component: () => <YearsPage />
})
