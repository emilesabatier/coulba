import { Outlet, createRoute } from "@tanstack/react-router"
import { appLayout } from "../app.layout"


export const attachmentsLayout = createRoute({
    getParentRoute: () => appLayout,
    beforeLoad: () => ({
        title: "Stockage de fichiers"
    }),
    path: '/fichiers',
    component: () => <Outlet />
})
