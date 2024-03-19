import { createRoute } from "@tanstack/react-router"
import { UsersPage } from "../../../pages/auth/configuration/users/usersPage"
import { configurationLayout } from "./configuration.layout"


export const usersRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Utilisateurs"
    }),
    path: '/utilisateurs',
    component: () => <UsersPage />
})
