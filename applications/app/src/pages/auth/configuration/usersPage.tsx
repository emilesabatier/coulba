import { ButtonPlain } from "@coulba/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { Main } from "../../../components/layouts/main/main"
import { CreateUser } from "../../../components/users/createUser/createUser"
import { UsersList } from "../../../components/users/usersList"


export function UsersPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Accès utilisateurs"
                description="Vous retrouvez sur cette page la liste des utilisateurs ayant accès à l'application."
            >
                <CreateUser>
                    <ButtonPlain
                        icon={<IconPlus />}
                        text="Ajouter un accès utilisateur"
                    />
                </CreateUser>
            </Main.Header>
            <Main.Content>
                <UsersList />
            </Main.Content>
        </Main.Root>
    )
}
