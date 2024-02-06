import { createRoute } from "@tanstack/react-router"
import { rollcallsLayout } from "./rollcalls.layout"
import { RollcallPage } from "../../../../pages/dashboard/agenda/rollcall/rollcallPage"


export const rollcallRoute = createRoute({
    getParentRoute: () => rollcallsLayout,
    path: '/$idRollcall',
    component: () => <RollcallPage />
})
