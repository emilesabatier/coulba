import { Outlet, createRoute } from "@tanstack/react-router"
import { statementsConfigLayout } from "../statementsConfig.layout"


export const statementsLayout = createRoute({
    getParentRoute: () => statementsConfigLayout,
    beforeLoad: () => ({
        title: "Postes",
        description: undefined
    }),
    path: '/postes',
    component: () => <Outlet />
})
