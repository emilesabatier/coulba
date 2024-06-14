import { createRoute } from "@tanstack/react-router"
import { Main } from "../components/layout/main/main"
import { PricingText } from "../components/pricing/pricingText"
import { rootLayout } from "./root.layout"


export const pricingRoute = createRoute({
    getParentRoute: () => rootLayout,
    beforeLoad: () => ({
        title: "Tarif"
    }),
    path: '/tarif',
    component: () => (
        <Main.Root>
            <Main.Header />
            <Main.Content>
                <PricingText />
            </Main.Content>
        </Main.Root >
    )
})
