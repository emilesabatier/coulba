import { createRouter } from '@tanstack/react-router'
import { featuresRoute } from './features.route'
import { pricingRoute } from './pricing.route'
import { rootLayout } from './root.layout'
import { termsRoute } from './terms.route'
import { homeRoute } from './home.route'
import { legalRoute } from './legal.route'


const routeTree = rootLayout.addChildren([
    homeRoute,
    featuresRoute,
    pricingRoute,
    termsRoute,
    legalRoute
])


export const router = createRouter({ routeTree })


declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
