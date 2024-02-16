import { Navigate, createRoute } from "@tanstack/react-router"
import { recordsLayout } from "./records.layout"


export const recordsRoute = createRoute({
    getParentRoute: () => recordsLayout,
    path: '/',
    component: () => <Navigate to="/livres/journal" />
})
