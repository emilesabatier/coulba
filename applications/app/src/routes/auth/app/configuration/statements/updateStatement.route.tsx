import { createRoute } from "@tanstack/react-router"
import { UpdateStatementPage } from "../../../../../pages/auth/configuration/statements/updateStatementPage"
import { statementsLayout } from "./statements.layout"


export const updateStatementRoute = createRoute({
    getParentRoute: () => statementsLayout,
    path: '/$idStatement/modifier',
    component: () => <UpdateStatementPage />
})
