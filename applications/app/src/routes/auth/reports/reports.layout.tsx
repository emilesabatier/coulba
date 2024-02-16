import { CircularLoader } from "@coulba/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { ReportsLayout } from "../../../pages/auth/reports/reportsLayout"
import { authLayout } from "../auth.layout"


export const reportsLayout = createRoute({
    getParentRoute: () => authLayout,
    path: '/liasse',
    pendingComponent: () => <CircularLoader />,
    component: () => <ReportsLayout />
})
