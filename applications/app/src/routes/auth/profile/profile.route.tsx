import { createRoute } from "@tanstack/react-router"
import { profileLayout } from "./profile.layout"
import { Main } from "../../../components/layouts/main"
import { ProfileContent } from "../../../components/profile/profileContent"


export const profileRoute = createRoute({
    getParentRoute: () => profileLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous trouverez sur cette page les informations et réglages liés à votre profil."
    }),
    path: '/',
    component: () => (
        <Main>
            <ProfileContent />
        </Main>
    )
})
