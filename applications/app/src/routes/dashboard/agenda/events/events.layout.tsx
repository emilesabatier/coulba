import { Outlet, createRoute } from "@tanstack/react-router"
import { EventIcon } from "../../../../components/event/event.icon"
import { agendaLayout } from "../agenda.layout"


export const eventsLayout = createRoute({
    getParentRoute: () => agendaLayout,
    beforeLoad: () => ({
        label: "Évènements",
        icon: <EventIcon />,
        subNavigationParent: "/agenda/evenements"
    }),
    path: '/evenements',
    component: () => <Outlet />
})
