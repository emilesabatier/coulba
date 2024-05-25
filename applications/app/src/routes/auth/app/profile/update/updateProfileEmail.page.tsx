import { createRoute } from "@tanstack/react-router"
import { UpdateProfileEmailPage } from "../../../../../pages/auth/profile/updateProfileEmailPage"
import { updateProfileLayout } from "./updateProfile.layout"


export const updateProfileEmailRoute = createRoute({
    getParentRoute: () => updateProfileLayout,
    beforeLoad: () => ({
        title: "Email",
        description: "Remplir le formulaire et valider pour modifier l'email."
    }),
    path: '/email',
    component: () => <UpdateProfileEmailPage />
})
