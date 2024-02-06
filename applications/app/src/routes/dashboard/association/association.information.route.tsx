import { IconInfoSquareRounded } from "@tabler/icons-react"
import { createRoute } from "@tanstack/react-router"
import { AssociationInformationPage } from "../../../pages/dashboard/association/associationInformationPage"
import { associationLayout } from "./association.layout"


export const associationInformationRoute = createRoute({
    getParentRoute: () => associationLayout,
    beforeLoad: () => ({
        label: "Informations",
        icon: <IconInfoSquareRounded />,
        subNavigationParent: "/association/informations"
    }),
    path: '/informations',
    component: () => <AssociationInformationPage />
})
