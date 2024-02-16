import { CircularLoader } from "@coulba/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { ProfileLayout } from "../../../pages/auth/profile/profileLayout"
import { authLayout } from "../auth.layout"


export const profileLayout = createRoute({
    getParentRoute: () => authLayout,
    path: '/profil',
    pendingComponent: () => <CircularLoader />,
    component: () => <ProfileLayout />
})
