import { createRoute } from "@tanstack/react-router"
import { journalsLayout } from "./journals.layout"
import { JournalsList } from "../../../../components/journals/journalsList"
import { Main } from "../../../../components/layouts/main"


export const journalsRoute = createRoute({
    getParentRoute: () => journalsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page la liste des journaux auxiliaires."
    }),
    path: '/',
    component: () => (
        <Main>
            <JournalsList />
        </Main>
    )
})
