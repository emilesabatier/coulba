import { createRoute } from "@tanstack/react-router"
import { UpdateAccountPage } from "../../../../../pages/auth/configuration/accounts/updateAccountPage"
import { accountsLayout } from "./accounts.layout"


export const updateAccountRoute = createRoute({
    getParentRoute: () => accountsLayout,
    path: '/$idAccount/modifier',
    component: () => <UpdateAccountPage />
})
