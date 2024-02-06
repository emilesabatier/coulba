import { createRoute } from "@tanstack/react-router"
import { ProfileSecurityPage } from "../../../pages/dashboard/profile/profileSecurityPage"
import { profileLayout } from "./profile.layout"
import { IconLock } from "@tabler/icons-react"


export const profileSecurityRoute = createRoute({
    getParentRoute: () => profileLayout,
    beforeLoad: () => ({
        label: "Sécurité",
        icon: <IconLock />
    }),
    path: '/securite',
    component: () => <ProfileSecurityPage />
})
