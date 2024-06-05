import { createRoute } from "@tanstack/react-router"
import { yearsLayout } from "./years.layout"
import { Main } from "../../../../components/layouts/main"
import { SwitchYear } from "../../../../components/years/switchYear"
import { YearsList } from "../../../../components/years/yearsList"


export const yearsRoute = createRoute({
    getParentRoute: () => yearsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page la liste des exercices fiscaux enregistrés pour l'entreprise."
    }),
    path: '/',
    component: () => (
        <Main>
            <SwitchYear />
            <YearsList />
        </Main>
    )
})
