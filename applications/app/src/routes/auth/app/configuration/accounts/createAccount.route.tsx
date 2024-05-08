import { createRoute } from "@tanstack/react-router"
import { CreateAccountPage } from "../../../../../pages/auth/configuration/accounts/createAccountPage"
import { accountsLayout } from "./accounts.layout"


export const createAccountRoute = createRoute({
    getParentRoute: () => accountsLayout,
    path: '/ajouter',
    component: () => <CreateAccountPage />
})
