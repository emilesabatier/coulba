import { Navigate, createRoute } from "@tanstack/react-router"
import { reportsLayout } from "./reports.layout"


export const reportsRoute = createRoute({
    getParentRoute: () => reportsLayout,
    path: '/',
    component: () => <Navigate to="/liasse/bilan" />
})
