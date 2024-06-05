import { createRoute } from "@tanstack/react-router"
import { updateProfileLayout } from "./updateProfile.layout"
import { Main } from "../../../../components/layouts/main"
import { UpdateProfilePasswordForm } from "../../../../components/profile/updateProfilePassword/updateProfilePassword.form"


export const updateProfilePasswordRoute = createRoute({
    getParentRoute: () => updateProfileLayout,
    beforeLoad: () => ({
        title: "Mot de passe",
        description: "Remplir le formulaire et valider pour modifier le mot de passe."
    }),
    path: '/motdepasse',
    component: () => (
        <Main>
            <UpdateProfilePasswordForm />
        </Main>
    )
})
