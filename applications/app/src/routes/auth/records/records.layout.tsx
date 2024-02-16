import { CircularLoader } from "@coulba/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { RecordsLayout } from "../../../pages/auth/records/recordsLayout"
import { authLayout } from "../auth.layout"


export const recordsLayout = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Livres"
    }),
    path: '/livres',
    pendingComponent: () => <CircularLoader />,
    component: () => <RecordsLayout />
})
