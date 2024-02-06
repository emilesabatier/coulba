import { CircularLoader } from "@monassosportive/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { ProfileLayout } from "../../../pages/dashboard/profile/profileLayout"
import { dashboardLayout } from "../dashboard.layout"


export const profileLayout = createRoute({
    getParentRoute: () => dashboardLayout,
    beforeLoad: () => ({
        label: "Profil",
        title: "Profil"
    }),
    path: '/profil',
    pendingComponent: () => <CircularLoader />,
    component: () => <ProfileLayout />
})
