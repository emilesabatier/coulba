import { createRoute } from "@tanstack/react-router"
import { JournalsPage } from "../../../pages/auth/configuration/journals/journalsPage"
import { configurationLayout } from "./configuration.layout"


export const journalsRoute = createRoute({
    getParentRoute: () => configurationLayout,
    beforeLoad: () => ({
        title: "Journaux"
    }),
    path: '/journaux',
    component: () => <JournalsPage />
})
