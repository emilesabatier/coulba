import { createRoute } from "@tanstack/react-router"
import { CreateJournalPage } from "../../../../../pages/auth/configuration/journals/createJournalPage"
import { journalsLayout } from "./journals.layout"


export const createJournalRoute = createRoute({
    getParentRoute: () => journalsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un nouveau journal."
    }),
    path: '/ajouter',
    component: () => <CreateJournalPage />
})
