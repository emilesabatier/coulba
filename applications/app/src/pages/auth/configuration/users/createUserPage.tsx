import { Main } from "../../../../components/layouts/main/main"
import { CreateUserForm } from "../../../../components/users/create/createUser.form"


export function CreateUserPage() {
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
