import { CircularLoader } from "@monassosportive/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { AgendaIcon } from "../../../components/calendar/calendar.icon"
import { AgendaLayout } from "../../../pages/dashboard/agenda/agendaLayout"
import { dashboardLayout } from "../dashboard.layout"


export const agendaLayout = createRoute({
    getParentRoute: () => dashboardLayout,
    beforeLoad: () => ({
        label: "Agenda",
        icon: <AgendaIcon />,
        title: "Agenda"
    }),
    path: '/agenda',
    pendingComponent: () => <CircularLoader />,
    component: () => <AgendaLayout />
})
