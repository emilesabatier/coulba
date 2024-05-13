import { CreateComputationForm } from "../../../../../components/computations/create/createComputation.form"
import { Main } from "../../../../../components/layouts/main/main"


export function CreateComputationPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Ajouter une opération dans le compte de résultat"
                description="Remplir le formulaire et valider pour ajouter une opération dans le compte de résultat."
            />
            <Main.Content>
                <CreateComputationForm />
            </Main.Content>
        </Main.Root>
    )
}
