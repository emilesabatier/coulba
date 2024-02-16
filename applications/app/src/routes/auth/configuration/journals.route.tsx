import { createRoute } from "@tanstack/react-router"
import { configurationLayout } from "./configuration.layout"
import { JournalsPage } from "../../../pages/auth/configuration/journalsPage"


export const journalsRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Journaux"
    }),
    path: '/journaux',
    component: () => <JournalsPage />
})
