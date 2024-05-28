import { createRouter } from '@tanstack/react-router'
import { homeRoute } from './home.route'
import { legalRoute } from './legal.route'
import { pricingRoute } from './pricing.route'
import { rootLayout } from './root.layout'
import { termsRoute } from './terms.route'


const routeTree = rootLayout.addChildren([
    homeRoute,
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
