import { createRoute } from "@tanstack/react-router"
import { UpdateSheetPage } from "../../../../pages/auth/configuration/sheets/updateSheetPage"
import { sheetsLayout } from "./sheets.layout"


export const updateSheetRoute = createRoute({
    getParentRoute: () => sheetsLayout,
    path: '/$idSheet/modifier',
    component: () => <UpdateSheetPage />
})
