import { createRoute } from "@tanstack/react-router"
import { configurationLayout } from "./configuration.layout"
import { UsersPage } from "../../../pages/auth/configuration/usersPage"


export const usersRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Utilisateurs"
    }),
    path: '/utilisateurs',
    component: () => <UsersPage />
})
