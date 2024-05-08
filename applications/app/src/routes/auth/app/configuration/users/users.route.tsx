import { createRoute } from "@tanstack/react-router"
import { UsersPage } from "../../../../../pages/auth/configuration/users/usersPage"
import { usersLayout } from "./users.layout"


export const usersRoute = createRoute({
    getParentRoute: () => usersLayout,
    path: '/',
    component: () => <UsersPage />
})
