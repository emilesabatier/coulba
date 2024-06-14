import { createRoute } from "@tanstack/react-router"
import { readAccountLayout } from "./readAccount.layout"
import { AccountContent } from "../../../../components/accounts/read/accountContent"
import { Main } from "../../../../components/layouts/main"


export const readAccountRoute = createRoute({
    getParentRoute: () => readAccountLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => (
        <Main>
            <AccountContent />
        </Main>
    )
})
