import { CreateJournalForm } from "../../../../components/journals/createJournal/createJournal.form"
import { Main } from "../../../../components/layouts/main/main"


export function AddJournalPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Ajouter un journal"
                description="Remplir le formulaire et valider pour ajouter un nouveau journal."
            />
            <Main.Content>
                <CreateJournalForm />
            </Main.Content>
        </Main.Root>
    )
}
