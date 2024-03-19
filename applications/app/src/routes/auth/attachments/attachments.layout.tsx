import { Outlet, createRoute } from "@tanstack/react-router"
import { authLayout } from "../auth.layout"


export const attachmentsLayout = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Stockage de fichiers"
    }),
    path: '/fichiers',
    component: () => <Outlet />
})
