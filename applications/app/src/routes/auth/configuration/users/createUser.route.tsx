import { createRoute } from "@tanstack/react-router"
import { usersLayout } from "./users.layout"
import { CreateUserPage } from "../../../../pages/auth/configuration/users/createUserPage"


export const createUserRoute = createRoute({
    getParentRoute: () => usersLayout,
    path: '/ajouter',
    component: () => <CreateUserPage />
})
