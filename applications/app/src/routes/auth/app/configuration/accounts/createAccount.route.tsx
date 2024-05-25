import { createRoute } from "@tanstack/react-router"
import { CreateAccountPage } from "../../../../../pages/auth/configuration/accounts/createAccountPage"
import { accountsLayout } from "./accounts.layout"


export const createAccountRoute = createRoute({
    getParentRoute: () => accountsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un nouveau compte."
    }),
    path: '/ajouter',
    component: () => <CreateAccountPage />
})
