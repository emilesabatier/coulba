import { createRoute } from "@tanstack/react-router"
import { updateProfileLayout } from "./updateProfile.layout"
import { UpdateProfileEmailPage } from "../../../../pages/auth/profile/updateProfileEmailPage"


export const updateProfileEmailRoute = createRoute({
    getParentRoute: () => updateProfileLayout,
    path: '/email',
    component: () => <UpdateProfileEmailPage />
})
