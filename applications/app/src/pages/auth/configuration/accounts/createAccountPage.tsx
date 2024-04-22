import { CreateAccountForm } from "../../../../components/accounts/create/createAccount.form"
import { Main } from "../../../../components/layouts/main/main"



export function CreateAccountPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Ajouter un compte"
                description="Remplir le formulaire et valider pour ajouter un nouveau compte."
            />
            <Main.Content>
                <CreateAccountForm />
            </Main.Content>
        </Main.Root>
    )
}
