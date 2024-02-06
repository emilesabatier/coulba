import { CircularLoader } from "@monassosportive/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { CollaboratorIcon } from "../../../components/collaborator/collaborator.icon"
import { CollaboratorsLayout } from "../../../pages/dashboard/collaborators/collaboratorsLayout"
import { dashboardLayout } from "../dashboard.layout"


export const collaboratorsLayout = createRoute({
    getParentRoute: () => dashboardLayout,
    beforeLoad: () => ({
        label: "Collaborateurs",
        icon: <CollaboratorIcon />,
        title: "Collaborateurs",
        subNavigationParent: "/collaborateurs"
    }),
    path: "/collaborateurs",
    pendingComponent: () => <CircularLoader />,
    component: () => <CollaboratorsLayout />
})
