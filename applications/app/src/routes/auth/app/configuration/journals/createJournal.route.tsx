import { createRoute } from "@tanstack/react-router"
import { CreateJournalPage } from "../../../../../pages/auth/configuration/journals/createJournalPage"
import { journalsLayout } from "./journals.layout"


export const createJournalRoute = createRoute({
    getParentRoute: () => journalsLayout,
    path: '/ajouter',
    component: () => <CreateJournalPage />
})
