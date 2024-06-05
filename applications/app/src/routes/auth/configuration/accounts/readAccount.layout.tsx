import { Outlet, createRoute } from "@tanstack/react-router"
import { accountsLayout } from "./accounts.layout"


export const readAccountLayout = createRoute({
    getParentRoute: () => accountsLayout,
    beforeLoad: ({ params }) => ({
        title: params.idAccount,
        description: undefined
    }),
    path: '/$idAccount',
    component: () => <Outlet />
})
