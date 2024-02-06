import { createRoute } from "@tanstack/react-router"
import { AccountsPage } from "../../../pages/dashboard/accounts/accountsPage"
import { accountsLayout } from "./accounts.layout"


export const accountsRoute = createRoute({
    getParentRoute: () => accountsLayout,
    path: '/',
    component: () => <AccountsPage />
})
