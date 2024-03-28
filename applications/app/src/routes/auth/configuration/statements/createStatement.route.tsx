import { createRoute } from "@tanstack/react-router"
import { CreateStatementPage } from "../../../../pages/auth/configuration/statements/createStatementPage"
import { statementsLayout } from "./statements.layout"


export const createStatementRoute = createRoute({
    getParentRoute: () => statementsLayout,
    path: '/ajouter',
    component: () => <CreateStatementPage />
})
