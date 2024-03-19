import { Outlet, createRoute } from "@tanstack/react-router"
import { authLayout } from "../auth.layout"


export const transactionsLayout = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Enregistrements"
    }),
    path: '/enregistrements',
    component: () => <Outlet />
})
