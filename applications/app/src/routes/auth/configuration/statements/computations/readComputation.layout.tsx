import { Outlet, createRoute } from "@tanstack/react-router"
import { computationsLayout } from "./computations.layout"


export const readComputationLayout = createRoute({
    getParentRoute: () => computationsLayout,
    beforeLoad: ({ params }) => ({
        title: params.idComputation,
        description: undefined
    }),
    path: '/$idComputation',
    component: () => <Outlet />
})
