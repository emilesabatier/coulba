import { createRoute } from "@tanstack/react-router"
import { JournalsPage } from "../../../../../pages/auth/configuration/journals/journalsPage"
import { journalsLayout } from "./journals.layout"


export const journalsRoute = createRoute({
    getParentRoute: () => journalsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page la liste des journaux auxiliaires."
    }),
    path: '/',
    component: () => <JournalsPage />
})
