import { Outlet, createRoute } from "@tanstack/react-router"
import { RoleIcon } from "../../../../components/role/role.icon"
import { accountsLayout } from "../accounts.layout"


export const rolesLayout = createRoute({
    getParentRoute: () => accountsLayout,
    beforeLoad: () => ({
        label: "Rôles",
        icon: <RoleIcon />,
        subNavigationParent: "/comptes/roles"
    }),
    path: '/roles',
    component: () => <Outlet />
})
