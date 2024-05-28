import { createRoute } from "@tanstack/react-router"
import { UpdateSheetPage } from "../../../../../pages/auth/configuration/sheets/updateSheetPage"
import { readSheetLayout } from "./readSheet.layout"


export const updateSheetRoute = createRoute({
    getParentRoute: () => readSheetLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de la ligne du bilan."
    }),
    path: '/modifier',
    component: () => <UpdateSheetPage />
})
