import { createRoute } from "@tanstack/react-router"
import { accountsLayout } from "./accounts.layout"
import { AddAccountPage } from "../../../../pages/auth/configuration/accounts/addAccountPage"


export const addAccountRoute = createRoute({
    getParentRoute: () => accountsLayout,
    path: '/ajouter',
    component: () => <AddAccountPage />
})
