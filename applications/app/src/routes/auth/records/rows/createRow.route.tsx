import { createRoute } from "@tanstack/react-router"
import { rowsLayout } from "./rows.layout"
import { Main } from "../../../../components/layouts/main"
import { CreateRowForm } from "../../../../components/rows/create/createRow.form"


export const createRowRoute = createRoute({
    getParentRoute: () => rowsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un nouvel ligne comptable."
    }),
    path: '/ajouter',
    component: () => (
        <Main>
            <CreateRowForm />
        </Main>
    )
})
