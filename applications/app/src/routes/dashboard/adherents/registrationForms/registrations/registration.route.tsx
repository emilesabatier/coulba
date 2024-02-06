import { createRoute } from "@tanstack/react-router"
import { RegistrationPage } from "../../../../../pages/dashboard/adherents/registrationPage"
import { registrationsLayout } from "./registrations.layout"


export const registrationRoute = createRoute({
    getParentRoute: () => registrationsLayout,
    path: '/$idRegistration',
    component: () => <RegistrationPage />
})
