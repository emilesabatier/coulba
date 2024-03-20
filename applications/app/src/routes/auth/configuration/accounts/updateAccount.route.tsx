import { createRoute } from "@tanstack/react-router"
import { accountsLayout } from "./accounts.layout"
import { UpdateAccountPage } from "../../../../pages/auth/configuration/accounts/updateAccountPage"


export const updateAccountRoute = createRoute({
    getParentRoute: () => accountsLayout,
    path: '/$idAccount/modifier',
    component: () => <UpdateAccountPage />
})
