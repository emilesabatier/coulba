import { createRoute } from "@tanstack/react-router"
import { AssociationSportsPage } from "../../../../pages/dashboard/association/sports/associationSportsPage"
import { associationSportsLayout } from "./association.sports.layout"


export const associationSportsRoute = createRoute({
    getParentRoute: () => associationSportsLayout,
    path: '/',
    component: () => <AssociationSportsPage />
})
