import { Main } from "../../../components/layouts/main/main"
import { CreateYearForm } from "../../../components/years/createYear/createYear.form"


export function AddYearPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Ajouter un fichier"
                description="Remplir le formulaire et valider pour ajouter un nouveau fichier."
            />
            <Main.Content>
                <CreateYearForm />
            </Main.Content>
        </Main.Root>
    )
}
