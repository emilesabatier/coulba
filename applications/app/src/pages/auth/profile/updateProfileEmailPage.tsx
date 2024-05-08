import { Main } from "../../../components/layouts/main/main"
import { UpdateProfileEmailForm } from "../../../components/profile/updateProfileEmail/updateProfileEmail.form"


export function UpdateProfileEmailPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Modifier l'email'"
                description="Remplir le formulaire et valider pour modifier l'email'."
            />
            <Main.Content>
                <UpdateProfileEmailForm />
            </Main.Content>
        </Main.Root>
    )
}
