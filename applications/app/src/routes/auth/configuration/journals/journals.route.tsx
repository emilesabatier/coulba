import { createRoute } from "@tanstack/react-router"
import { journalsLayout } from "./journals.layout"
import { JournalsPage } from "../../../../pages/auth/configuration/journals/journalsPage"


export const journalsRoute = createRoute({
    getParentRoute: () => journalsLayout,
    path: '/',
    component: () => <JournalsPage />
})
