import { createRoute } from "@tanstack/react-router"
import { CreateUserPage } from "../../../../../pages/auth/configuration/users/createUserPage"
import { usersLayout } from "./users.layout"


export const createUserRoute = createRoute({
    getParentRoute: () => usersLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un nouvel utilisateur."
    }),
    path: '/ajouter',
    component: () => <CreateUserPage />
})
