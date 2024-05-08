import { createRoute } from "@tanstack/react-router"
import { UpdateProfilePasswordPage } from "../../../../../pages/auth/profile/updateProfilePasswordPage"
import { updateProfileLayout } from "./updateProfile.layout"


export const updateProfilePasswordRoute = createRoute({
    getParentRoute: () => updateProfileLayout,
    path: '/motdepasse',
    component: () => <UpdateProfilePasswordPage />
})
