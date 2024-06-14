import { createRoute } from "@tanstack/react-router"
import { usersLayout } from "./users.layout"
import { Main } from "../../../../components/layouts/main"
import { CreateUserForm } from "../../../../components/users/create/createUser.form"


export const createUserRoute = createRoute({
    getParentRoute: () => usersLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un nouvel utilisateur."
    }),
    path: '/ajouter',
    component: () => (
        <Main>
            <CreateUserForm />
        </Main>
    )
})
