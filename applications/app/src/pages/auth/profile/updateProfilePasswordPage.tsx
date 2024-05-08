import { Main } from "../../../components/layouts/main/main"
import { UpdateProfilePasswordForm } from "../../../components/profile/updateProfilePassword/updateProfilePassword.form"


export function UpdateProfilePasswordPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Modifier le mot de passe"
                description="Remplir le formulaire et valider pour modifier le mot de passe."
            />
            <Main.Content>
                <UpdateProfilePasswordForm />
            </Main.Content>
        </Main.Root>
    )
}
