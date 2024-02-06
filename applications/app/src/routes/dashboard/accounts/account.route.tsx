import { createRoute } from "@tanstack/react-router"
import { AccountPage } from "../../../pages/dashboard/accounts/accountPage"
import { accountsLayout } from "./accounts.layout"


export const accountRoute = createRoute({
    getParentRoute: () => accountsLayout,
    path: '/$idAccount',
    component: () => <AccountPage />
})
