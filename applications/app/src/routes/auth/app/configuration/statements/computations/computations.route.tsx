import { createRoute } from "@tanstack/react-router"
import { ComputationsPage } from "../../../../../../pages/auth/configuration/statements/computations/computationsPage"
import { computationsLayout } from "./computations.layout"


export const computationsRoute = createRoute({
    getParentRoute: () => computationsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => <ComputationsPage />
})
