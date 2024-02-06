import { createRoute } from "@tanstack/react-router"
import { TermsPage } from "../pages/termsPage"
import { rootLayout } from "./root.layout"


export const termsRoute = createRoute({
    getParentRoute: () => rootLayout,
    path: '/conditions-utilisation-et-vente',
    component: () => <TermsPage />
})
