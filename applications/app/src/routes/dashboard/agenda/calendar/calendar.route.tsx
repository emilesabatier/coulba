import { createRoute } from "@tanstack/react-router"
import { CalendarPage } from "../../../../pages/dashboard/agenda/calendar/calendarPage"
import { agendaLayout } from "../agenda.layout"


export const calendarRoute = createRoute({
    getParentRoute: () => agendaLayout,
    beforeLoad: () => ({
        subNavigationParent: "/agenda/calendrier"
    }),
    path: '/calendrier',
    component: () => <CalendarPage />,

})
