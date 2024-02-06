import { createRoute } from "@tanstack/react-router"
import { positionsLayout } from "./positions.layout"
import { PositionPage } from "../../../../pages/dashboard/collaborators/positions/positionPage"


export const positionRoute = createRoute({
    getParentRoute: () => positionsLayout,
    path: '/$idPosition',
    component: () => <PositionPage />
})
