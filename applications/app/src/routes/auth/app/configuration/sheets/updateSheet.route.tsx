import { createRoute } from "@tanstack/react-router"
import { readSheetLayout } from "./readSheet.layout"
import { Main } from "../../../../../components/layouts/main"
import { UpdateSheetForm } from "../../../../../components/sheets/update/updateSheet.form"


export const updateSheetRoute = createRoute({
    getParentRoute: () => readSheetLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de la ligne du bilan."
    }),
    path: '/modifier',
    component: () => (
        <Main>
            <UpdateSheetForm />
        </Main>
    )
})
