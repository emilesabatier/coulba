import { CircularLoader } from "@coulba/design/layouts"
import { Outlet, createRoute } from "@tanstack/react-router"
import { recordsLayout } from "../records.layout"


export const entriesLayout = createRoute({
    getParentRoute: () => recordsLayout,
    beforeLoad: () => ({
        title: "Journal"
    }),
    path: '/journal',
    pendingComponent: () => <CircularLoader />,
    component: () => <Outlet />
})
