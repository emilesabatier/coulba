import { createRoute } from "@tanstack/react-router"
import { sheetsLayout } from "./sheets.layout"
import { Main } from "../../../../../components/layouts/main"
import { CreateSheetForm } from "../../../../../components/sheets/create/createSheet.form"


export const createSheetRoute = createRoute({
    getParentRoute: () => sheetsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter une nouvelle ligne dans le bilan."
    }),
    path: '/ajouter',
    component: () => (
        <Main>
            <CreateSheetForm />
        </Main>
    )
})
