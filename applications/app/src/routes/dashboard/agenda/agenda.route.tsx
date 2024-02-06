import { Navigate, createRoute } from "@tanstack/react-router"
import { agendaLayout } from "./agenda.layout"


export const agendaRoute = createRoute({
    getParentRoute: () => agendaLayout,
    path: '/',
    component: () => <Navigate to="/agenda/calendrier" />
})
