import { Main } from "../../../components/layouts/main/main"
import { CreateUserForm } from "../../../components/users/createUser/createUser.form"


export function AddUserPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Ajouter un fichier"
                description="Remplir le formulaire et valider pour ajouter un nouveau fichier."
            />
            <Main.Content>
                <CreateUserForm />
            </Main.Content>
        </Main.Root>
    )
}
