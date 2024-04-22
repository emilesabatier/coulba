import { createRoute } from "@tanstack/react-router"
import { UpdateProfileEmailPage } from "../../../../../pages/auth/profile/updateProfileEmailPage"
import { updateProfileLayout } from "./updateProfile.layout"


export const updateProfileEmailRoute = createRoute({
    getParentRoute: () => updateProfileLayout,
    path: '/email',
    component: () => <UpdateProfileEmailPage />
})
