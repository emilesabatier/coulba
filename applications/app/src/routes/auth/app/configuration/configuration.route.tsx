import { Navigate, createRoute } from "@tanstack/react-router"
import { configurationLayout } from "./configuration.layout"


export const configurationRoute = createRoute({
    getParentRoute: () => configurationLayout,
    path: '/',
    component: () => <Navigate to="/configuration/societe" />
})
