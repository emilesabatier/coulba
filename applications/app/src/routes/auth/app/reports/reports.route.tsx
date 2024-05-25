import { Navigate, createRoute } from "@tanstack/react-router"
import { reportsLayout } from "./reports.layout"


export const reportsRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => <Navigate to="/documents/journal" />
})
