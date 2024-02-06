import { createRoute } from "@tanstack/react-router"
import { SeasonIcon } from "../../../components/season/season.icon"
import { AssociationSeasonsPage } from "../../../pages/dashboard/association/associationSeasonsPage"
import { associationLayout } from "./association.layout"


export const associationSeasonsRoute = createRoute({
    getParentRoute: () => associationLayout,
    beforeLoad: () => ({
        label: "Saisons",
        icon: <SeasonIcon />,
        subNavigationParent: "/association/saisons"
    }),
    path: '/saisons',
    component: () => <AssociationSeasonsPage />
})
