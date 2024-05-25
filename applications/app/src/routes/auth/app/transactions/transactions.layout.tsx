import { Outlet, createRoute } from "@tanstack/react-router"
import { appLayout } from "../../app.layout"


export const transactionsLayout = createRoute({
    getParentRoute: () => appLayout,
    beforeLoad: () => ({
        title: "Enregistrements",
        description: "Vous trouverez sur cette page la liste des enregistrements comptables provisoires, avant leur validation et ajout définitif au journal."
    }),
    path: '/enregistrements',
    component: () => <Outlet />
})
