import { createRoute } from "@tanstack/react-router"
import { EventsPage } from "../../../../pages/dashboard/agenda/event/eventsPage"
import { eventsLayout } from "./events.layout"


export const eventsRoute = createRoute({
    getParentRoute: () => eventsLayout,
    path: '/',
    component: () => <EventsPage />
})
