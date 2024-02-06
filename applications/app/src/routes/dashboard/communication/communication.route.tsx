import { Navigate, createRoute } from "@tanstack/react-router"
import { communicationLayout } from "./communication.layout"


export const communicationRoute = createRoute({
    getParentRoute: () => communicationLayout,
    path: '/',
    component: () => <Navigate to="/communication/messagerie" />
})
