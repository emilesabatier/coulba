import { createRoute } from "@tanstack/react-router"
import { readRowLayout } from "./readRow.layout"
import { Main } from "../../../../components/layouts/main"
import { UpdateRowForm } from "../../../../components/rows/update/updateRow.form"


export const updateRowRoute = createRoute({
    getParentRoute: () => readRowLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier la ligne."
    }),
    path: '/modifier',
    component: () => (
        <Main>
            <UpdateRowForm />
        </Main>
    )
})
