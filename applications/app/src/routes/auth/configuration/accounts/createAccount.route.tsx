import { createRoute } from "@tanstack/react-router"
import { accountsLayout } from "./accounts.layout"
import { CreateAccountPage } from "../../../../pages/auth/configuration/accounts/createAccountPage"


export const createAccountRoute = createRoute({
    getParentRoute: () => accountsLayout,
    path: '/ajouter',
    component: () => <CreateAccountPage />
})
