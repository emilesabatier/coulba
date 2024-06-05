import { createRoute } from "@tanstack/react-router"
import { usersLayout } from "./users.layout"
import { Main } from "../../../../components/layouts/main"
import { UpdateUserForm } from "../../../../components/users/update/updateUser.form"


export const updateUserRoute = createRoute({
    getParentRoute: () => usersLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données de l'utilisateur."
    }),
    path: '/$idUser/modifier',
    component: () => (
        <Main>
            <UpdateUserForm />
        </Main>
    )
})
