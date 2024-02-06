import { Navigate, createRoute } from "@tanstack/react-router"
import { profileLayout } from "./profile.layout"


export const profileRoute = createRoute({
    getParentRoute: () => profileLayout,
    path: '/',
    component: () => <Navigate to="/profil/informations" />
})
