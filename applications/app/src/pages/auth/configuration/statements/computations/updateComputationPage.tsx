import { UpdateComputationForm } from "../../../../../components/computations/update/updateComputation.form"
import { Main } from "../../../../../components/layouts/main/main"


export function UpdateComputationPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Modifier une opération du compte de résultat"
                description="Remplir le formulaire et valider pour modifier les données de l'opération du bilan."
            />
            <UpdateComputationForm />
        </Main.Root>
    )
}
