import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main"
import { ApiContent } from "../../../components/organization/apiContent"
import { configurationLayout } from "./configuration.layout"


export const APIRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "API",
        description: "Vous retrouvez sur cette page la clé API qui vous permettra d'automatiser l'ajout d'lignes depuis une source externe."
    }),
    path: '/api',
    component: () => (
        <Main>
            <ApiContent />
        </Main>
    )
})
