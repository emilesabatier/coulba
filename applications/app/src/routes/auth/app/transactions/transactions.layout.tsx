import { Outlet, createRoute } from "@tanstack/react-router"
import { appLayout } from "../../app.layout"


export const transactionsLayout = createRoute({
    getParentRoute: () => appLayout,
    beforeLoad: () => ({
        title: "Enregistrements"
    }),
    path: '/enregistrements',
    component: () => <Outlet />
})
