import { createRoute } from "@tanstack/react-router"
import { UpdateRowPage } from "../../../../../pages/auth/records/rows/updateRowPage"
import { readRowLayout } from "./readRow.layout"


export const updateRowRoute = createRoute({
    getParentRoute: () => readRowLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier la ligne."
    }),
    path: '/modifier',
    component: () => <UpdateRowPage />
})
