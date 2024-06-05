import { createRoute } from "@tanstack/react-router"
import { readRowLayout } from "./readRow.layout"
import { Main } from "../../../../components/layouts/main"
import { RowContent } from "../../../../components/rows/read/rowContent"


export const readRowRoute = createRoute({
    getParentRoute: () => readRowLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Consulter les données de la ligne."
    }),
    path: '/',
    component: () => (
        <Main>
            <RowContent />
        </Main>
    )
})
