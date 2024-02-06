import { CircularLoader } from "@monassosportive/design/layouts"
import { Outlet, createRoute } from "@tanstack/react-router"
import { SportIcon } from "../../../../components/sport/sport.icon"
import { associationLayout } from "../association.layout"


export const associationSportsLayout = createRoute({
    getParentRoute: () => associationLayout,
    beforeLoad: () => ({
        label: "Sports",
        icon: <SportIcon />,
        subNavigationParent: "/association/sports"
    }),
    path: '/sports',
    pendingComponent: () => <CircularLoader />,
    component: () => <Outlet />
})
