import { createRoute } from "@tanstack/react-router"
import { CollaboratorsPage } from "../../../pages/dashboard/collaborators/collaborators/collaboratorsPage"
import { collaboratorsLayout } from "./collaborators.layout"


export const collaboratorsRoute = createRoute({
    getParentRoute: () => collaboratorsLayout,
    path: '/',
    component: () => <CollaboratorsPage />
})
