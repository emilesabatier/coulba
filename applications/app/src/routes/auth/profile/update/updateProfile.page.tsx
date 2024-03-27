import { createRoute } from "@tanstack/react-router"
import { UpdateProfilePage } from "../../../../pages/auth/profile/updateProfilePage"
import { updateProfileLayout } from "./updateProfile.layout"


export const updateProfileRoute = createRoute({
    getParentRoute: () => updateProfileLayout,
    path: '/',
    component: () => <UpdateProfilePage />
})
