import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../../../components/layouts/main"
import { SwitchYear } from "../../../../../components/years/switchYear"
import { yearsLayout } from "../years.layout"


export const switchYearRoute = createRoute({
    getParentRoute: () => yearsLayout,
    beforeLoad: () => ({
        title: "Changer",
        description: undefined
    }),
    path: '/changer',
    component: () => {
        return (
            <Main>
                <SwitchYear />
            </Main>
        )
    }
})
