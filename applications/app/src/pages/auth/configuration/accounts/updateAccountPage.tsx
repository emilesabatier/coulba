import { UpdateAccountForm } from "../../../../components/accounts/updateAccount/updateAccount.form"
import { Main } from "../../../../components/layouts/main/main"



export function UpdateAccountPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Modifier un compte"
                description="Remplir le formulaire et valider pour modifier les données du compte."
            />
            <UpdateAccountForm />
        </Main.Root>
    )
}
