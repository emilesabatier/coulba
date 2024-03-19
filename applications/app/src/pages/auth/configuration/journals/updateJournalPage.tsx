import { UpdateJournalForm } from "../../../components/journals/updateJournal/updateJournal.form"
import { Main } from "../../../components/layouts/main/main"


export function UpdateJournalPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Modifier un fichier"
                description="Remplir le formulaire et valider pour modifier les données du fichier."
            />
            <UpdateJournalForm />
        </Main.Root>
    )
}
