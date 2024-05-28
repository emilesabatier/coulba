import { createRoute } from "@tanstack/react-router"
import { UpdateAccountPage } from "../../../../../pages/auth/configuration/accounts/updateAccountPage"
import { readAccountLayout } from "./readAccount.layout"


export const updateAccountRoute = createRoute({
    getParentRoute: () => readAccountLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données du compte."
    }),
    path: '/modifier',
    component: () => <UpdateAccountPage />
})
