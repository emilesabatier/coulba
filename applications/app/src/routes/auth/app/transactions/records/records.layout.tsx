import { Outlet, createRoute } from "@tanstack/react-router"
import { readTransactionLayout } from "../readTransaction.layout"


export const recordsLayout = createRoute({
    getParentRoute: () => readTransactionLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous trouverez sur cette page la liste des enregistrements comptables provisoires, avant leur validation et ajout définitif au journal."
    }),
    path: '/enregistrements',
    component: () => <Outlet />
})
