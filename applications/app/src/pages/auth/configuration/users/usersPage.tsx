import { Main } from "../../../../components/layouts/main/main"
import { UsersList } from "../../../../components/users/usersList"


export function UsersPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Accès utilisateurs"
                description="Vous retrouvez sur cette page la liste des utilisateurs ayant accès à l'application."
            />
            <Main.Content>
                <UsersList />
            </Main.Content>
        </Main.Root>
    )
}
