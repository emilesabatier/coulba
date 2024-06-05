import { createRoute } from "@tanstack/react-router"
import { configurationLayout } from "./configuration.layout"
import { Main } from "../../../components/layouts/main"
import { CloseYear } from "../../../components/years/closeYear"
import { DownloadDocuments } from "../../../components/years/downloadDocuments"


export const closingRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Clôture",
        description: "Vous pouvez sur cette page clôturer l'exercice fiscal en cours et générer la version finale des documents comptables."
    }),
    path: '/cloture',
    component: () => (
        <Main>
            <CloseYear />
            <DownloadDocuments />
        </Main>
    )
})
