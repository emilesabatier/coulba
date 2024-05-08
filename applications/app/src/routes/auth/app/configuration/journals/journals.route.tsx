import { createRoute } from "@tanstack/react-router"
import { JournalsPage } from "../../../../../pages/auth/configuration/journals/journalsPage"
import { journalsLayout } from "./journals.layout"


export const journalsRoute = createRoute({
    getParentRoute: () => journalsLayout,
    path: '/',
    component: () => <JournalsPage />
})
