import { createRoute } from "@tanstack/react-router"
import { configurationLayout } from "./configuration.layout"
import { YearsPage } from "../../../pages/auth/configuration/yearsPage"


export const yearsRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Exercices"
    }),
    path: '/exercices',
    component: () => <YearsPage />
})
