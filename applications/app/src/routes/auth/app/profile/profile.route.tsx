import { createRoute } from "@tanstack/react-router"
import { ProfilePage } from "../../../../pages/auth/profile/profilePage"
import { profileLayout } from "./profile.layout"


export const profileRoute = createRoute({
    getParentRoute: () => profileLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous trouverez sur cette page les informations et réglages liés à votre profil."
    }),
    path: '/',
    component: () => <ProfilePage />
})
