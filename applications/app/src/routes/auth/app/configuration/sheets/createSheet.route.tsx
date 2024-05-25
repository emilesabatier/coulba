import { createRoute } from "@tanstack/react-router"
import { CreateSheetPage } from "../../../../../pages/auth/configuration/sheets/createSheetPage"
import { sheetsLayout } from "./sheets.layout"


export const createSheetRoute = createRoute({
    getParentRoute: () => sheetsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter une nouvelle ligne dans le bilan."
    }),
    path: '/ajouter',
    component: () => <CreateSheetPage />
})
