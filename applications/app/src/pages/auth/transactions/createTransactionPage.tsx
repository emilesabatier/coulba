import { Main } from "../../../components/layouts/main/main"
import { CreateTransactionForm } from "../../../components/transactions/create/createTransaction.form"


export function CreateTransactionPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Ajouter un enregistrement"
                description="Remplir le formulaire et valider pour ajouter un nouvel enregistrement comptable."
            />
            <Main.Content>
                <CreateTransactionForm />
            </Main.Content>
        </Main.Root>
    )
}
