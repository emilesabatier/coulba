import { createRoute } from "@tanstack/react-router"
import { usersLayout } from "./users.layout"
import { AddUserPage } from "../../../../pages/auth/configuration/users/addUserPage"


export const addUserRoute = createRoute({
    getParentRoute: () => usersLayout,
    path: '/ajouter',
    component: () => <AddUserPage />
})
