import { Outlet, createRoute } from "@tanstack/react-router"
import { rowsLayout } from "./rows.layout"


export const readRowLayout = createRoute({
    getParentRoute: () => rowsLayout,
    beforeLoad: ({ params }) => ({
        title: params.idRow,
        description: undefined
    }),
    path: '/$idRow',
    component: () => <Outlet />
})
