import { createRoute } from "@tanstack/react-router"
import { updateProfileLayout } from "./updateProfile.layout"
import { Main } from "../../../../components/layouts/main"
import { UpdateProfileEmailForm } from "../../../../components/profile/updateProfileEmail/updateProfileEmail.form"


export const updateProfileEmailRoute = createRoute({
    getParentRoute: () => updateProfileLayout,
    beforeLoad: () => ({
        title: "Email",
        description: "Remplir le formulaire et valider pour modifier l'email."
    }),
    path: '/email',
    component: () => (
        <Main>
            <UpdateProfileEmailForm />
        </Main>
    )
})
