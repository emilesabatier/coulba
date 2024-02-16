import { createRoute } from "@tanstack/react-router"
import { APIPage } from "../../../pages/auth/configuration/apiPage"
import { configurationLayout } from "./configuration.layout"


export const APIRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "API"
    }),
    path: '/api',
    component: () => <APIPage />
})
