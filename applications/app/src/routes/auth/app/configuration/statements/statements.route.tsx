import { createRoute } from "@tanstack/react-router"
import { StatementsPage } from "../../../../../pages/auth/configuration/statements/statementsPage"
import { statementsLayout } from "./statements.layout"


export const statementsRoute = createRoute({
    getParentRoute: () => statementsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page le modèle du compte de résultat de l'entreprise que vous pouvez modifier selon votre besoin. Veuillez à bien savoir ce que vous faites avant de supprimer des données."
    }),
    path: '/',
    component: () => <StatementsPage />
})
