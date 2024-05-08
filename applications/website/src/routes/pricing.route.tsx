import { createRoute } from "@tanstack/react-router"
import { PricingPage } from "../pages/pricingPage"
import { rootLayout } from "./root.layout"


export const pricingRoute = createRoute({
    getParentRoute: () => rootLayout,
    path: '/tarif',
    component: () => <PricingPage />
})
