import { createRoute } from "@tanstack/react-router"
import { rollcallsLayout } from "./rollcalls.layout"
import { RollcallsPage } from "../../../../pages/dashboard/agenda/rollcall/rollcallsPage"


export const rollcallsRoute = createRoute({
    getParentRoute: () => rollcallsLayout,
    path: '/',
    component: () => <RollcallsPage />
})
