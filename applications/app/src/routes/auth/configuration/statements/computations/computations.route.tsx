import { createRoute } from "@tanstack/react-router"
import { computationsLayout } from "./computations.layout"
import { ComputationsList } from "../../../../../components/computations/computationsList"
import { Main } from "../../../../../components/layouts/main"


export const computationsRoute = createRoute({
    getParentRoute: () => computationsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => (
        <Main>
            <ComputationsList />
        </Main>
    )
})
