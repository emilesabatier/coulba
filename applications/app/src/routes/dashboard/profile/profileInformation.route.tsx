import { IconInfoSquareRounded } from "@tabler/icons-react"
import { createRoute } from "@tanstack/react-router"
import { ProfileInformationPage } from "../../../pages/dashboard/profile/profileInformationPage"
import { profileLayout } from "./profile.layout"


export const profileInformationRoute = createRoute({
    getParentRoute: () => profileLayout,
    beforeLoad: () => ({
        label: "Informations",
        icon: <IconInfoSquareRounded />,
    }),
    path: '/informations',
    component: () => <ProfileInformationPage />
})
