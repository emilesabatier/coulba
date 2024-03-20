import { createRoute } from "@tanstack/react-router"
import { journalsLayout } from "./journals.layout"
import { AddJournalPage } from "../../../../pages/auth/configuration/journals/addJournalPage"


export const addJournalRoute = createRoute({
    getParentRoute: () => journalsLayout,
    path: '/ajouter',
    component: () => <AddJournalPage />
})
