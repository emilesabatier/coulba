import { createRoute } from "@tanstack/react-router"
import { journalsLayout } from "./journals.layout"
import { CreateJournalPage } from "../../../../pages/auth/configuration/journals/createJournalPage"


export const createJournalRoute = createRoute({
    getParentRoute: () => journalsLayout,
    path: '/ajouter',
    component: () => <CreateJournalPage />
})
