import { createRoute } from "@tanstack/react-router"
import { journalsLayout } from "./journals.layout"
import { CreateJournalForm } from "../../../../components/journals/create/createJournal.form"
import { Main } from "../../../../components/layouts/main"


export const createJournalRoute = createRoute({
    getParentRoute: () => journalsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un nouveau journal."
    }),
    path: '/ajouter',
    component: () => (
        <Main>
            <CreateJournalForm />
        </Main>
    )
})
