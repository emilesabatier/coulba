import { Main } from "../../../../components/layouts/main/main"
import { CreateYearForm } from "../../../../components/years/create/createYear.form"


export function CreateYearPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Ajouter un exercice"
                description="Remplir le formulaire et valider pour ajouter un nouvel exercice."
            />
            <Main.Content>
                <CreateYearForm />
            </Main.Content>
        </Main.Root>
    )
}
