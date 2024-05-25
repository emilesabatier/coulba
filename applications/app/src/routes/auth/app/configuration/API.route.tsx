import { createRoute } from "@tanstack/react-router"
import { APIPage } from "../../../../pages/auth/configuration/APIPage"
import { configurationLayout } from "./configuration.layout"


export const APIRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "API",
        description: "Vous retrouvez sur cette page la clé API qui vous permettra d'automatiser l'ajout d'enregistrements depuis une source externe."
    }),
    path: '/api',
    component: () => <APIPage />
})
