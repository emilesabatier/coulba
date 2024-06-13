import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../../components/layouts/main"
import { YearsList } from "../../../../components/years/yearsList"
import { yearsLayout } from "./years.layout"


export const yearsListRoute = createRoute({
    getParentRoute: () => yearsLayout,
    beforeLoad: () => ({
        title: "Liste",
        description: undefined
    }),
    path: '/liste',
    component: () => (
        <Main>
            <YearsList />
        </Main>
    )
})
