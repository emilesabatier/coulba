import { createRoute } from "@tanstack/react-router"
import { readComputationLayout } from "./readComputation.layout"
import { ComputationContent } from "../../../../../components/computations/read/computationContent"
import { Main } from "../../../../../components/layouts/main"


export const readComputationRoute = createRoute({
    getParentRoute: () => readComputationLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => (
        <Main>
            <ComputationContent />
        </Main>
    )
})
