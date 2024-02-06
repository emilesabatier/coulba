import { createRoute } from "@tanstack/react-router"
import { EventPage } from "../../../../pages/dashboard/agenda/event/eventPage"
import { eventsLayout } from "./events.layout"


export const eventRoute = createRoute({
    getParentRoute: () => eventsLayout,
    path: '/$idEvent',
    component: () => <EventPage />,
    loader: async ({ params: { idEvent } }) => {
        return { idEvent: idEvent }
    }
})
