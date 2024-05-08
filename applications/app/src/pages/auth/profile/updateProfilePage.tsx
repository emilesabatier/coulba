import { Main } from "../../../components/layouts/main/main"
import { UpdateProfileForm } from "../../../components/profile/updateProfile/updateProfile.form"


export function UpdateProfilePage() {
    return (
        <Main.Root>
            <Main.Header
                title="Modifier les informations du profil"
                description="Remplir le formulaire et valider pour modifier les données du profil."
            />
            <Main.Content>
                <UpdateProfileForm />
            </Main.Content>
        </Main.Root>
    )
}
