import { createRoute } from "@tanstack/react-router"
import { RolesPage } from "../../../../pages/dashboard/accounts/rolesPage"
import { rolesLayout } from "./roles.layout"


export const rolesRoute = createRoute({
    getParentRoute: () => rolesLayout,
    path: '/',
    component: () => <RolesPage />
})
