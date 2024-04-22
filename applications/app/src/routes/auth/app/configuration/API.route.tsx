import { createRoute } from "@tanstack/react-router"
import { configurationLayout } from "./configuration.layout"
import { APIPage } from "../../../../pages/auth/configuration/APIPage"


export const APIRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "API"
    }),
    path: '/api',
    component: () => <APIPage />
})
