import { createRoute } from "@tanstack/react-router"
import { UpdateUserPage } from "../../../../../pages/auth/configuration/users/updateUserPage"
import { usersLayout } from "./users.layout"


export const updateUserRoute = createRoute({
    getParentRoute: () => usersLayout,
    path: '/$idUser/modifier',
    component: () => <UpdateUserPage />
})
