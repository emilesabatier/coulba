import { Navigate, createRoute } from "@tanstack/react-router"
import { associationLayout } from "./association.layout"


export const associationRoute = createRoute({
    getParentRoute: () => associationLayout,
    path: '/',
    component: () => <Navigate to="/association/informations" />
})
