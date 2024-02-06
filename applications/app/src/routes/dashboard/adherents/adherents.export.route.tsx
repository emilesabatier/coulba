import { IconDownload } from "@tabler/icons-react"
import { createRoute } from "@tanstack/react-router"
import { AdherentsExportPage } from "../../../pages/dashboard/adherents/adherentsExportPage"
import { adherentsLayout } from "./adherents.layout"


export const adherentsExportRoute = createRoute({
    getParentRoute: () => adherentsLayout,
    beforeLoad: () => ({
        label: "Exporter",
        icon: <IconDownload />,
        subNavigationParent: "/adherents/exporter"
    }),
    path: '/exporter',
    component: () => <AdherentsExportPage />
})
