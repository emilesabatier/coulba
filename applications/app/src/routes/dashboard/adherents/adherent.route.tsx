import { createRoute } from "@tanstack/react-router"
import { AdherentPage } from "../../../pages/dashboard/adherents/adherentPage"
import { adherentsLayout } from "./adherents.layout"


export const adherentRoute = createRoute({
    getParentRoute: () => adherentsLayout,
    path: '/$idAdherent',
    component: () => <AdherentPage />
})
