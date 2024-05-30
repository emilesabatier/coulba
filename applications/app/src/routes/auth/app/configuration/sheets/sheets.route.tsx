import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../../../components/layouts/main"
import { SheetsList } from "../../../../../components/sheets/sheetsList"
import { sheetsLayout } from "./sheets.layout"


export const sheetsRoute = createRoute({
    getParentRoute: () => sheetsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page le modèle du bilan de l'entreprise que vous pouvez modifier selon votre besoin. Veuillez à bien savoir ce que vous faites avant de supprimer des données."
    }),
    path: '/',
    component: () => (
        <Main>
            <SheetsList />
        </Main>
    )
})
