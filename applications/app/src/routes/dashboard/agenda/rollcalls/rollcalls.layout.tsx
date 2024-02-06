import { Outlet, createRoute } from "@tanstack/react-router"
import { RollcallIcon } from "../../../../components/rollcall/rollcall.icon"
import { agendaLayout } from "../agenda.layout"


export const rollcallsLayout = createRoute({
    getParentRoute: () => agendaLayout,
    beforeLoad: () => ({
        label: "Appels",
        icon: <RollcallIcon />,
        subNavigationParent: "/agenda/appels"
    }),
    path: '/appels',
    component: () => <Outlet />
})
