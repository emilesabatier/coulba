import { createRoute } from "@tanstack/react-router"
import { LegalPage } from "../pages/legalPage"
import { rootLayout } from "./root.layout"


export const legalRoute = createRoute({
    getParentRoute: () => rootLayout,
    path: '/legal',
    component: () => <LegalPage />
})
