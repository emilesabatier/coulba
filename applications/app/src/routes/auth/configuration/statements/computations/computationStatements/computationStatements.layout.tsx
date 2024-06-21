import { Outlet, createRoute } from "@tanstack/react-router"
import { readComputationLayout } from "../readComputation.layout"


export const computationStatementsLayout = createRoute({
    getParentRoute: () => readComputationLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/postes',
    component: () => <Outlet />
})
