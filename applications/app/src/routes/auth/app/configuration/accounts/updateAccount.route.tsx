import { createRoute } from "@tanstack/react-router"
import { UpdateAccountPage } from "../../../../../pages/auth/configuration/accounts/updateAccountPage"
import { accountsLayout } from "./accounts.layout"


export const updateAccountRoute = createRoute({
    getParentRoute: () => accountsLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données du compte."
    }),
    path: '/$idAccount/modifier',
    component: () => <UpdateAccountPage />
})
