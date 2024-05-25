import { Outlet, createRoute } from "@tanstack/react-router"
import { statementsLayout } from "../statements.layout"


export const computationsLayout = createRoute({
    getParentRoute: () => statementsLayout,
    beforeLoad: () => ({
        title: "Calculs",
        description: undefined
    }),
    path: '/calculs',
    component: () => <Outlet />
})
