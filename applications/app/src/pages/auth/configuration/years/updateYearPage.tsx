import { Main } from "../../../components/layouts/main/main"
import { UpdateYearForm } from "../../../components/years/updateYear/updateYear.form"


export function UpdateYearPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Modifier un fichier"
                description="Remplir le formulaire et valider pour modifier les données du fichier."
            />
            <UpdateYearForm />
        </Main.Root>
    )
}
