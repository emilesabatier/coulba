import { createRoute } from "@tanstack/react-router"
import { RolePage } from "../../../../pages/dashboard/accounts/rolePage"
import { rolesLayout } from "./roles.layout"


export const roleRoute = createRoute({
    getParentRoute: () => rolesLayout,
    path: '/$idRole',
    component: () => <RolePage />
})
