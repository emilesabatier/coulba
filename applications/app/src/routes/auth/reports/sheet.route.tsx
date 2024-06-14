import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main"
import { SheetReport } from "../../../components/reports/sheet/sheetReport"
import { reportsLayout } from "./reports.layout"


export const sheetRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Bilan",
        description: "Le bilan comptable permet d'avoir une vue globale sur la santé de l'entreprise. Il présente ce que l'entreprise possède (actif) et ce qu'elle doit (passif)."
    }),
    path: '/bilan',
    component: () => (
        <Main>
            <SheetReport />
        </Main>
    )
})
