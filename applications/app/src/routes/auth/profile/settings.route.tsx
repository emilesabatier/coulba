import { createRoute } from "@tanstack/react-router"
import { SettingsPage } from "../../../pages/auth/profile/settingsPage"
import { profileLayout } from "./profile.layout"


export const settingsRoute = createRoute({
    getParentRoute: () => profileLayout,
    beforeLoad: () => ({
        title: "Paramètres"
    }),
    path: '/parametres',
    component: () => <SettingsPage />
})
