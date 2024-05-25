import { createRoute } from "@tanstack/react-router"
import { UpdateJournalPage } from "../../../../../pages/auth/configuration/journals/updateJournalPage"
import { journalsLayout } from "./journals.layout"


export const updateJournalRoute = createRoute({
    getParentRoute: () => journalsLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données du journal."
    }),
    path: '/$idJournal/modifier',
    component: () => <UpdateJournalPage />
})
