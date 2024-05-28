import { Outlet, createRoute } from "@tanstack/react-router"
import { sheetsLayout } from "./sheets.layout"


export const readSheetLayout = createRoute({
    getParentRoute: () => sheetsLayout,
    beforeLoad: ({ params }) => ({
        title: params.idSheet,
        description: undefined
    }),
    path: '/$idSheet',
    component: () => <Outlet />
})
