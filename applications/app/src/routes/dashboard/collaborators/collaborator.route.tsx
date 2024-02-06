import { createRoute } from "@tanstack/react-router"
import { CollaboratorPage } from "../../../pages/dashboard/collaborators/collaborators/collaboratorPage"
import { collaboratorsLayout } from "./collaborators.layout"


export const collaboratorRoute = createRoute({
    getParentRoute: () => collaboratorsLayout,
    path: '/$idCollaborator',
    component: () => <CollaboratorPage />
})
