import { Outlet, createRoute } from "@tanstack/react-router"
import { collaboratorsLayout } from "../collaborators.layout"
import { PositionIcon } from "../../../../components/position/position.icon"


export const positionsLayout = createRoute({
    getParentRoute: () => collaboratorsLayout,
    beforeLoad: () => ({
        label: "Postes",
        icon: <PositionIcon />,
        subNavigationParent: "/collaborateurs/postes"
    }),
    path: '/postes',
    component: () => <Outlet />
})
