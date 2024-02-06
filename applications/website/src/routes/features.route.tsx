import { createRoute } from "@tanstack/react-router"
import { FeaturesPage } from "../pages/featuresPage"
import { rootLayout } from "./root.layout"


export const featuresRoute = createRoute({
    getParentRoute: () => rootLayout,
    path: '/fonctionnalites',
    component: () => <FeaturesPage />
})
