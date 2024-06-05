import { createRoute } from "@tanstack/react-router"
import { updateProfileLayout } from "./updateProfile.layout"
import { Main } from "../../../../components/layouts/main"
import { UpdateProfileForm } from "../../../../components/profile/updateProfile/updateProfile.form"


export const updateProfileRoute = createRoute({
    getParentRoute: () => updateProfileLayout,
    beforeLoad: () => ({
        title: "Profil",
        description: "Remplir le formulaire et valider pour modifier les données du profil."
    }),
    path: '/',
    component: () => (
        <Main>
            <UpdateProfileForm />
        </Main>
    )
})
