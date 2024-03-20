import { createRoute } from "@tanstack/react-router"
import { usersLayout } from "./users.layout"
import { UsersPage } from "../../../../pages/auth/configuration/users/usersPage"


export const usersRoute = createRoute({
    getParentRoute: () => usersLayout,
    path: '/',
    component: () => <UsersPage />
})
