import { createRoute } from "@tanstack/react-router"
import { AdherentsPage } from "../../../pages/dashboard/adherents/adherentsPage"
import { adherentsLayout } from "./adherents.layout"


export const adherentsRoute = createRoute({
    getParentRoute: () => adherentsLayout,
    path: '/',
    component: () => <AdherentsPage />
})
