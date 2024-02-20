import { createRoute } from "@tanstack/react-router"
import { SheetPage } from "../../../pages/auth/declaration/sheetPage"
import { reportsLayout } from "./reports.layout"


export const sheetRoute = createRoute({
    getParentRoute: () => reportsLayout,
    beforeLoad: () => ({
        title: "Bilan"
    }),
    path: '/bilan',
    component: () => <SheetPage />
})
