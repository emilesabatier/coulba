import { createRoute } from "@tanstack/react-router"
import { ReadRowPage } from "../../../../../pages/auth/records/rows/readRowPage"
import { readRowLayout } from "./readRow.layout"


export const readRowRoute = createRoute({
    getParentRoute: () => readRowLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Consulter les données de la ligne."
    }),
    path: '/',
    component: () => <ReadRowPage />
})
