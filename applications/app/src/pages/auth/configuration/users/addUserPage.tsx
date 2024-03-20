import { Main } from "../../../../components/layouts/main/main"
import { CreateUserForm } from "../../../../components/users/createUser/createUser.form"


export function AddUserPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Ajouter un utilisateur"
                description="Remplir le formulaire et valider pour ajouter un nouvel utilisateur."
            />
            <Main.Content>
                <CreateUserForm />
            </Main.Content>
        </Main.Root>
    )
}
