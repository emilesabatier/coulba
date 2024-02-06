import { createRoute } from "@tanstack/react-router"
import { RegistrationFormsPage } from "../../../../pages/dashboard/adherents/registrationFormsPage"
import { registrationFormsLayout } from "./registrationForms.layout"


export const registrationFormsRoute = createRoute({
    getParentRoute: () => registrationFormsLayout,
    path: '/',
    component: () => <RegistrationFormsPage />
})
