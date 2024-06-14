import { Navigate, createRoute } from "@tanstack/react-router"
import { configurationLayout } from "./configuration.layout"


export const configurationRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => <Navigate to="/configuration/organisation" />
})
