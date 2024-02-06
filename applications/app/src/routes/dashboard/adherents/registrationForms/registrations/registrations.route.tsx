import { createRoute } from "@tanstack/react-router"
import { RegistrationsPage } from "../../../../../pages/dashboard/adherents/registrationsPage"
import { registrationsLayout } from "./registrations.layout"


export const registrationsRoute = createRoute({
    getParentRoute: () => registrationsLayout,
    path: '/',
    component: () => <RegistrationsPage />
})
