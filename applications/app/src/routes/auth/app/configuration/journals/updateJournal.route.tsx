import { createRoute } from "@tanstack/react-router"
import { UpdateJournalPage } from "../../../../../pages/auth/configuration/journals/updateJournalPage"
import { journalsLayout } from "./journals.layout"


export const updateJournalRoute = createRoute({
    getParentRoute: () => journalsLayout,
    path: '/$idJournal/modifier',
    component: () => <UpdateJournalPage />
})
