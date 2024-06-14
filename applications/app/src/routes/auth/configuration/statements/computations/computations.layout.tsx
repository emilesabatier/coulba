import { Outlet, createRoute } from "@tanstack/react-router"
import { statementsConfigLayout } from "../statementsConfig.layout"


export const computationsLayout = createRoute({
    getParentRoute: () => statementsConfigLayout,
    beforeLoad: () => ({
        title: "Calculs",
        description: undefined
    }),
    path: '/calculs',
    component: () => <Outlet />
})
