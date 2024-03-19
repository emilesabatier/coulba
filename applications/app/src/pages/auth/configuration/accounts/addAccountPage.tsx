import { CreateAccountForm } from "../../../components/accounts/createAccount/createAccount.form"
import { Main } from "../../../components/layouts/main/main"


export function AddAccountPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Ajouter un fichier"
                description="Remplir le formulaire et valider pour ajouter un nouveau fichier."
            />
            <Main.Content>
                <CreateAccountForm />
            </Main.Content>
        </Main.Root>
    )
}
