import { Outlet, createRoute } from "@tanstack/react-router"
import { configurationLayout } from "../configuration.layout"


export const yearsLayout = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Exercices fiscaux"
    }),
    path: '/exercices',
    component: () => <Outlet />
})
