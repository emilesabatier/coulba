import { createRoute } from "@tanstack/react-router"
import { ReadComputationPage } from "../../../../../../pages/auth/configuration/statements/computations/readComputationPage"
import { readComputationLayout } from "./readComputation.layout"


export const readComputationRoute = createRoute({
    getParentRoute: () => readComputationLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => <ReadComputationPage />
})
