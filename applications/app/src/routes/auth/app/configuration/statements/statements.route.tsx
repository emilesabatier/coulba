import { createRoute } from "@tanstack/react-router"
import { StatementsPage } from "../../../../../pages/auth/configuration/statements/statementsPage"
import { statementsLayout } from "./statements.layout"


export const statementsRoute = createRoute({
    getParentRoute: () => statementsLayout,
    path: '/',
    component: () => <StatementsPage />
})
