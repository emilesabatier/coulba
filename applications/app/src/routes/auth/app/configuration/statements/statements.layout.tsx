import { Outlet, createRoute } from "@tanstack/react-router"
import { configurationLayout } from "../configuration.layout"


export const statementsLayout = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Compte de résultat"
    }),
    path: '/compte-de-resultat',
    component: () => <Outlet />
})
