import { createRoute } from "@tanstack/react-router"
import { SheetsPage } from "../../../../pages/auth/configuration/sheets/sheetsPage"
import { sheetsLayout } from "./sheets.layout"


export const sheetsRoute = createRoute({
    getParentRoute: () => sheetsLayout,
    path: '/',
    component: () => <SheetsPage />
})
