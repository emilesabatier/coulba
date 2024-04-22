import { Main } from "../../../components/layouts/main/main"
import { UpdateTransactionForm } from "../../../components/transactions/update/updateTransaction.form"


export function UpdateTransactionPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Modifier un enregistrement"
                description="Remplir le formulaire et valider pour modifier l'enregistrement comptable."
            />
            <Main.Content>
                <UpdateTransactionForm />
            </Main.Content>
        </Main.Root>
    )
}
