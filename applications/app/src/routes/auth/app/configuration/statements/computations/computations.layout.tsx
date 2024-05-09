import { Outlet, createRoute } from "@tanstack/react-router"
import { statementsLayout } from "../statements.layout"


export const computationsLayout = createRoute({
    getParentRoute: () => statementsLayout,
    path: '/operations',
    component: () => <Outlet />
})
