import { createRoute } from "@tanstack/react-router"
import { CreateSheetPage } from "../../../../pages/auth/configuration/sheets/createSheetPage"
import { sheetsLayout } from "./sheets.layout"


export const createSheetRoute = createRoute({
    getParentRoute: () => sheetsLayout,
    path: '/ajouter',
    component: () => <CreateSheetPage />
})
