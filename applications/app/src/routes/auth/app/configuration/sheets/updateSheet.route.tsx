import { createRoute } from "@tanstack/react-router"
import { UpdateSheetPage } from "../../../../../pages/auth/configuration/sheets/updateSheetPage"
import { sheetsLayout } from "./sheets.layout"


export const updateSheetRoute = createRoute({
    getParentRoute: () => sheetsLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de la ligne du bilan."
    }),
    path: '/$idSheet/modifier',
    component: () => <UpdateSheetPage />
})
