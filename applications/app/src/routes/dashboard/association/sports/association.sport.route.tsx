import { createRoute } from "@tanstack/react-router"
import { AssociationSportPage } from "../../../../pages/dashboard/association/sports/associationSportPage"
import { associationSportsLayout } from "./association.sports.layout"


export const associationSportRoute = createRoute({
    getParentRoute: () => associationSportsLayout,
    path: '/$idSport',
    component: () => <AssociationSportPage />
})
