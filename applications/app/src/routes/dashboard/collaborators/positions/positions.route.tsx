import { createRoute } from "@tanstack/react-router"
import { positionsLayout } from "./positions.layout"
import { PositionsPage } from "../../../../pages/dashboard/collaborators/positions/positionsPage"


export const positionsRoute = createRoute({
    getParentRoute: () => positionsLayout,
    path: '/',
    component: () => <PositionsPage />
})
