import { Outlet, createRoute } from "@tanstack/react-router"
import { recordsLayout } from "./records.layout"


export const readRecordLayout = createRoute({
    getParentRoute: () => recordsLayout,
    beforeLoad: ({ params }) => ({
        title: params.idRecord,
        description: undefined
    }),
    path: '/$idRecord',
    component: () => <Outlet />
})
