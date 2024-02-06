import { Outlet, createRoute } from "@tanstack/react-router"
import { mutate } from "swr"
import { registrationsKey } from "../../../../../hooks/data/useRegistrations"
import { registrationFormsLayout } from "../registrationForms.layout"


export const registrationsLayout = createRoute({
    getParentRoute: () => registrationFormsLayout,
    path: '/$idRegistrationForm',
    component: () => <Outlet />,
    loader: async ({ params: { idRegistrationForm } }) => {
        mutate(registrationsKey(idRegistrationForm))
        return { idRegistrationForm: idRegistrationForm }
    }
})
