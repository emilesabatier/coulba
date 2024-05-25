import { createRoute } from "@tanstack/react-router"
import { UpdateProfilePage } from "../../../../../pages/auth/profile/updateProfilePage"
import { updateProfileLayout } from "./updateProfile.layout"


export const updateProfileRoute = createRoute({
    getParentRoute: () => updateProfileLayout,
    beforeLoad: () => ({
        title: "Profil",
        description: "Remplir le formulaire et valider pour modifier les données du profil."
    }),
    path: '/',
    component: () => <UpdateProfilePage />
})
