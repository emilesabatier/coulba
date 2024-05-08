import { createRoute } from "@tanstack/react-router"
import { CreateUserPage } from "../../../../../pages/auth/configuration/users/createUserPage"
import { usersLayout } from "./users.layout"


export const createUserRoute = createRoute({
    getParentRoute: () => usersLayout,
    path: '/ajouter',
    component: () => <CreateUserPage />
})
