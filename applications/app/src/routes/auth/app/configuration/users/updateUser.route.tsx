import { createRoute } from "@tanstack/react-router"
import { UpdateUserPage } from "../../../../../pages/auth/configuration/users/updateUserPage"
import { usersLayout } from "./users.layout"


export const updateUserRoute = createRoute({
    getParentRoute: () => usersLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de l'utilisateur."
    }),
    path: '/$idUser/modifier',
    component: () => <UpdateUserPage />
})
