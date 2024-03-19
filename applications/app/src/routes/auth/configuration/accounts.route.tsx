import { createRoute } from "@tanstack/react-router"
import { AccountsPage } from "../../../pages/auth/configuration/accounts/accountsPage"
import { configurationLayout } from "./configuration.layout"


export const accountsRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Comptes"
    }),
    path: '/comptes',
    component: () => <AccountsPage />
})
