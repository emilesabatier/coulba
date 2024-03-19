import { CreateJournalForm } from "../../../components/journals/createJournal/createJournal.form"
import { Main } from "../../../components/layouts/main/main"


export function AddJournalPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Ajouter un fichier"
                description="Remplir le formulaire et valider pour ajouter un nouveau fichier."
            />
            <Main.Content>
                <CreateJournalForm />
            </Main.Content>
        </Main.Root>
    )
}
