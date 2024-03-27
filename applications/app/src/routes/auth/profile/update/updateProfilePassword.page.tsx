import { createRoute } from "@tanstack/react-router"
import { updateProfileLayout } from "./updateProfile.layout"
import { UpdateProfilePasswordPage } from "../../../../pages/auth/profile/updateProfilePasswordPage"


export const updateProfilePasswordRoute = createRoute({
    getParentRoute: () => updateProfileLayout,
    path: '/motdepasse',
    component: () => <UpdateProfilePasswordPage />
})
