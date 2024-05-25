import { createRoute } from "@tanstack/react-router"
import { UpdateProfilePasswordPage } from "../../../../../pages/auth/profile/updateProfilePasswordPage"
import { updateProfileLayout } from "./updateProfile.layout"


export const updateProfilePasswordRoute = createRoute({
    getParentRoute: () => updateProfileLayout,
    beforeLoad: () => ({
        title: "Mot de passe",
        description: "Remplir le formulaire et valider pour modifier le mot de passe."
    }),
    path: '/motdepasse',
    component: () => <UpdateProfilePasswordPage />
})
