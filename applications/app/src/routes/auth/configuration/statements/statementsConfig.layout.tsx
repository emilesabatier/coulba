import { Outlet, createRoute } from "@tanstack/react-router"
import { configurationLayout } from "../configuration.layout"


export const statementsConfigLayout = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Compte de résultat",
        description: undefined
    }),
    path: '/compte-de-resultat',
    component: () => <Outlet />
})
