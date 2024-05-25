import { createRoute } from "@tanstack/react-router"
import { SheetsPage } from "../../../../../pages/auth/configuration/sheets/sheetsPage"
import { sheetsLayout } from "./sheets.layout"


export const sheetsRoute = createRoute({
    getParentRoute: () => sheetsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page le modèle du bilan de l'entreprise que vous pouvez modifier selon votre besoin. Veuillez à bien savoir ce que vous faites avant de supprimer des données."
    }),
    path: '/',
    component: () => <SheetsPage />
})
