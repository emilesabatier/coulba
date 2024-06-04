import { createRoute } from "@tanstack/react-router"
import { CreateRowPage } from "../../../../../pages/auth/records/rows/createRowPage"
import { rowsLayout } from "./rows.layout"


export const createRowRoute = createRoute({
    getParentRoute: () => rowsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un nouvel ligne comptable."
    }),
    path: '/ajouter',
    component: () => <CreateRowPage />
})
