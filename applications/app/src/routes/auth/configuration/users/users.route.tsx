import { createRoute } from "@tanstack/react-router"
import { usersLayout } from "./users.layout"
import { Main } from "../../../../components/layouts/main"
import { UsersList } from "../../../../components/users/usersList"


export const usersRoute = createRoute({
    getParentRoute: () => usersLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page la liste des utilisateurs ayant accès à l'application."
    }),
    path: '/',
    component: () => (
        <Main>
            <UsersList />
        </Main>
    )
})
