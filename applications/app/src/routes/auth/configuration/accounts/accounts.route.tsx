import { createRoute } from "@tanstack/react-router"
import { accountsLayout } from "./accounts.layout"
import { AccountsPage } from "../../../../pages/auth/configuration/accounts/accountsPage"


export const accountsRoute = createRoute({
    getParentRoute: () => accountsLayout,
    path: '/',
    component: () => <AccountsPage />
})
