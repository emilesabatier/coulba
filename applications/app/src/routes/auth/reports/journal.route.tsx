import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main"
import { JournalReport } from "../../../components/reports/journalReport"
import { reportsLayout } from "./reports.layout"


export const journalRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Livre-journal",
        description: "Le livre-journal est un document qui contient toutes les entrées enregistrées et validées. Il représente toutes les écritures de votre organisation."
    }),
    path: '/livre-journal',
    component: () => (
        <Main>
            <JournalReport />
        </Main>
    )
})
