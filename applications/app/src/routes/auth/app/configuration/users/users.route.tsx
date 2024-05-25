import { createRoute } from "@tanstack/react-router"
import { UsersPage } from "../../../../../pages/auth/configuration/users/usersPage"
import { usersLayout } from "./users.layout"


export const usersRoute = createRoute({
    getParentRoute: () => usersLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page la liste des utilisateurs ayant accès à l'application."
    }),
    path: '/',
    component: () => <UsersPage />
})
