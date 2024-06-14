import { createRoute } from "@tanstack/react-router"
import { journalsLayout } from "./journals.layout"
import { UpdateJournalForm } from "../../../../components/journals/update/updateJournal.form"
import { Main } from "../../../../components/layouts/main"


export const updateJournalRoute = createRoute({
    getParentRoute: () => journalsLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données du journal."
    }),
    path: '/$idJournal/modifier',
    component: () => (
        <Main>
            <UpdateJournalForm />
        </Main>
    )
})
