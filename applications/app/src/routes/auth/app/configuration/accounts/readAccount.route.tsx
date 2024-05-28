import { createRoute } from "@tanstack/react-router"
import { ReadAccountPage } from "../../../../../pages/auth/configuration/accounts/readAccountPage"
import { readAccountLayout } from "./readAccount.layout"


export const readAccountRoute = createRoute({
    getParentRoute: () => readAccountLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => <ReadAccountPage />
})
