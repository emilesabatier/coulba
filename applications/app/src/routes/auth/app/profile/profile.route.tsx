import { createRoute } from "@tanstack/react-router"
import { ProfilePage } from "../../../../pages/auth/profile/profilePage"
import { profileLayout } from "./profile.layout"


export const profileRoute = createRoute({
    getParentRoute: () => profileLayout,
    path: '/',
    component: () => <ProfilePage />
})
