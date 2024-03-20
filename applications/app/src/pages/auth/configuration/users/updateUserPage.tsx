import { Main } from "../../../../components/layouts/main/main"
import { UpdateUserForm } from "../../../../components/users/updateUser/updateUser.form"


export function UpdateUserPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Modifier un utilisateur"
                description="Remplir le formulaire et valider pour modifier les données de l'utilisateur."
            />
            <UpdateUserForm />
        </Main.Root>
    )
}
