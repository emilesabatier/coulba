import { CircularLoader } from "@monassosportive/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { AssociationLayout } from "../../../pages/dashboard/association/associationLayout"
import { dashboardLayout } from "../dashboard.layout"


export const associationLayout = createRoute({
    getParentRoute: () => dashboardLayout,
    beforeLoad: () => ({
        label: "Association",
        title: "Association"
    }),
    path: '/association',
    pendingComponent: () => <CircularLoader />,
    component: () => <AssociationLayout />
})
