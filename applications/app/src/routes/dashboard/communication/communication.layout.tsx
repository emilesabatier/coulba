import { CircularLoader } from "@monassosportive/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { CommunicationLayout } from "../../../pages/dashboard/communication/communicationLayout"
import { dashboardLayout } from "../dashboard.layout"


export const communicationLayout = createRoute({
    getParentRoute: () => dashboardLayout,
    beforeLoad: () => ({
        label: "Communication",
        title: "Communication"
    }),
    path: '/communication',
    pendingComponent: () => <CircularLoader />,
    component: () => <CommunicationLayout />
})
