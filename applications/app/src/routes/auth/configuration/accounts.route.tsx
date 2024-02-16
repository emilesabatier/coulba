import { createRoute } from "@tanstack/react-router"
import { configurationLayout } from "./configuration.layout"
import { AccountsPage } from "../../../pages/auth/configuration/accountsPage"


export const accountsRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Comptes"
    }),
    path: '/comptes',
    component: () => <AccountsPage />
})
